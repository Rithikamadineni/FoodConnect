package com.rithika.foodconnect.controller;

import com.rithika.foodconnect.entity.FoodRequest;
import com.rithika.foodconnect.service.FoodRequestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/request")
@CrossOrigin("*")
public class FoodRequestController {

    private final FoodRequestService foodRequestService;

    public FoodRequestController(FoodRequestService foodRequestService) {
        this.foodRequestService = foodRequestService;
    }

    @PostMapping("/add")
    public String requestFood(@RequestBody FoodRequest foodRequest) {
        return foodRequestService.requestFood(foodRequest);
    }

    @GetMapping("/all")
    public List<FoodRequest> getAllRequests() {
        return foodRequestService.getAllRequests();
    }

    @GetMapping("/my/{ngoName}")
    public List<FoodRequest> getMyRequests(@PathVariable String ngoName) {
        return foodRequestService.getMyRequests(ngoName);
    }

    @PutMapping("/cancel/{requestId}")
    public String cancelRequest(@PathVariable Long requestId) {
        return foodRequestService.cancelRequest(requestId);
    }
}