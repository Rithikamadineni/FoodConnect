package com.rithika.foodconnect.service.impl;

import com.rithika.foodconnect.entity.FoodRequest;
import com.rithika.foodconnect.repository.FoodRequestRepository;
import com.rithika.foodconnect.service.FoodRequestService;
import org.springframework.stereotype.Service;
import com.rithika.foodconnect.exception.ResourceNotFoundException;
import java.util.List;

@Service
public class FoodRequestServiceImpl implements FoodRequestService {

    private final FoodRequestRepository foodRequestRepository;

    public FoodRequestServiceImpl(FoodRequestRepository foodRequestRepository) {
        this.foodRequestRepository = foodRequestRepository;
    }

    @Override
    public String requestFood(FoodRequest foodRequest) {

        foodRequest.setStatus("PENDING");

        foodRequestRepository.save(foodRequest);

        return "Food Requested Successfully";
    }

    @Override
    public List<FoodRequest> getAllRequests() {
        return foodRequestRepository.findAll();
    }

    @Override
    public List<FoodRequest> getMyRequests(String ngoName) {
        return foodRequestRepository.findByNgoName(ngoName);
    }

    @Override
    public String cancelRequest(Long requestId) {

        FoodRequest request = foodRequestRepository.findById(requestId)
                .orElseThrow(() -> new ResourceNotFoundException("Request not found"));

        request.setStatus("CANCELLED");

        foodRequestRepository.save(request);

        return "Request Cancelled Successfully";
    }
}