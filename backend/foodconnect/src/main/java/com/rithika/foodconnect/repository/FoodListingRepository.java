package com.rithika.foodconnect.repository;

import com.rithika.foodconnect.entity.FoodListing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoodListingRepository extends JpaRepository<FoodListing, Long> {

    List<FoodListing> findByDonorId(Long donorId);

}