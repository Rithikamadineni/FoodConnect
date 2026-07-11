package com.rithika.foodconnect.service.impl;

import com.rithika.foodconnect.entity.Delivery;
import com.rithika.foodconnect.exception.ResourceNotFoundException;
import com.rithika.foodconnect.repository.DeliveryRepository;
import com.rithika.foodconnect.service.DeliveryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    private final DeliveryRepository deliveryRepository;

    public DeliveryServiceImpl(DeliveryRepository deliveryRepository) {
        this.deliveryRepository = deliveryRepository;
    }

    @Override
    public String acceptDelivery(Delivery delivery) {

        delivery.setStatus("ACCEPTED");

        deliveryRepository.save(delivery);

        return "Delivery Accepted Successfully";
    }

    @Override
    public List<Delivery> getMyDeliveries(String volunteerName) {

        return deliveryRepository.findByVolunteerName(volunteerName);
    }

    @Override
    public String markPickedUp(Long id) {

        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Delivery not found"));

        delivery.setStatus("PICKED_UP");

        deliveryRepository.save(delivery);

        return "Food Picked Up Successfully";
    }

    @Override
    public String markDelivered(Long id) {

        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Delivery not found"));

        delivery.setStatus("DELIVERED");

        deliveryRepository.save(delivery);

        return "Food Delivered Successfully";
    }
}