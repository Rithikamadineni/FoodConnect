package com.rithika.foodconnect.repository;

import com.rithika.foodconnect.entity.FoodRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodRequestRepository extends JpaRepository<FoodRequest, Long> {

    List<FoodRequest> findByNgoName(String ngoName);

}