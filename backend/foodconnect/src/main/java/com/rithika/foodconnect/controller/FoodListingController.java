package com.rithika.foodconnect.controller;

import com.rithika.foodconnect.entity.FoodListing;
import com.rithika.foodconnect.service.FoodListingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
@CrossOrigin("*")
public class FoodListingController {

    private final FoodListingService foodListingService;

    public FoodListingController(FoodListingService foodListingService) {
        this.foodListingService = foodListingService;
    }

    @PostMapping("/add/{donorId}")
    public String addFood(@PathVariable Long donorId,
                          @RequestBody FoodListing foodListing) {

        return foodListingService.addFood(donorId, foodListing);
    }

    @GetMapping("/all")
    public List<FoodListing> getAllFood() {
        return foodListingService.getAllFood();
    }

    @GetMapping("/my/{donorId}")
    public List<FoodListing> getMyFood(@PathVariable Long donorId) {
        return foodListingService.getMyFood(donorId);
    }

    @PutMapping("/update/{foodId}")
    public String updateFood(@PathVariable Long foodId,
                             @RequestBody FoodListing foodListing) {

        return foodListingService.updateFood(foodId, foodListing);
    }

    @DeleteMapping("/delete/{foodId}")
    public String deleteFood(@PathVariable Long foodId) {

        return foodListingService.deleteFood(foodId);
    }
}