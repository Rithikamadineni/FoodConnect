package com.rithika.foodconnect.service;

import com.rithika.foodconnect.entity.FoodRequest;

import java.util.List;

public interface FoodRequestService {

    String requestFood(FoodRequest foodRequest);

    List<FoodRequest> getAllRequests();

    List<FoodRequest> getMyRequests(String ngoName);

    String cancelRequest(Long requestId);
}