package com.rithika.foodconnect.service.impl;

import com.rithika.foodconnect.entity.FoodListing;
import com.rithika.foodconnect.entity.User;
import com.rithika.foodconnect.repository.FoodListingRepository;
import com.rithika.foodconnect.repository.UserRepository;
import com.rithika.foodconnect.service.FoodListingService;
import org.springframework.stereotype.Service;
import com.rithika.foodconnect.exception.ResourceNotFoundException;
import java.util.List;

@Service
public class FoodListingServiceImpl implements FoodListingService {

    private final FoodListingRepository foodListingRepository;
    private final UserRepository userRepository;

    public FoodListingServiceImpl(FoodListingRepository foodListingRepository,
                                  UserRepository userRepository) {
        this.foodListingRepository = foodListingRepository;
        this.userRepository = userRepository;
    }

    @Override
    public String addFood(Long donorId, FoodListing foodListing) {

        User donor = userRepository.findById(donorId)
                .orElseThrow(() -> new ResourceNotFoundException("Donor not found"));

        foodListing.setDonor(donor);

        foodListingRepository.save(foodListing);

        return "Food Listing Added Successfully";
    }

    @Override
    public List<FoodListing> getAllFood() {
        return foodListingRepository.findAll();
    }

    @Override
    public List<FoodListing> getMyFood(Long donorId) {
        return foodListingRepository.findByDonorId(donorId);
    }

    @Override
    public String updateFood(Long foodId, FoodListing updatedFood) {

        FoodListing food = foodListingRepository.findById(foodId)
                .orElseThrow(() -> new ResourceNotFoundException("Food not found"));

        food.setFoodName(updatedFood.getFoodName());
        food.setCategory(updatedFood.getCategory());
        food.setQuantity(updatedFood.getQuantity());
        food.setLocation(updatedFood.getLocation());
        food.setExpiryTime(updatedFood.getExpiryTime());
        food.setStatus(updatedFood.getStatus());

        foodListingRepository.save(food);

        return "Food Updated Successfully";
    }

    @Override
    public String deleteFood(Long foodId) {

        if (!foodListingRepository.existsById(foodId)) {
            throw new ResourceNotFoundException("Food not found");
        }

        foodListingRepository.deleteById(foodId);

        return "Food Deleted Successfully";
    }
}