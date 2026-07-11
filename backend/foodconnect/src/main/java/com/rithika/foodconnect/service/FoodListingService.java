package com.rithika.foodconnect.service;

import com.rithika.foodconnect.entity.FoodListing;

import java.util.List;

public interface FoodListingService {

    String addFood(Long donorId, FoodListing foodListing);

    List<FoodListing> getAllFood();

    List<FoodListing> getMyFood(Long donorId);

    String updateFood(Long foodId, FoodListing foodListing);

    String deleteFood(Long foodId);
}