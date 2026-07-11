package com.rithika.foodconnect.repository;

import com.rithika.foodconnect.entity.Delivery;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryRepository extends JpaRepository<Delivery, Long> {

    List<Delivery> findByVolunteerName(String volunteerName);

}