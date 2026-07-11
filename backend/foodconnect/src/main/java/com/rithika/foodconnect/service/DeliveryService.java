package com.rithika.foodconnect.service;

import com.rithika.foodconnect.entity.Delivery;

import java.util.List;

public interface DeliveryService {

    String acceptDelivery(Delivery delivery);

    List<Delivery> getMyDeliveries(String volunteerName);

    String markPickedUp(Long id);

    String markDelivered(Long id);
}