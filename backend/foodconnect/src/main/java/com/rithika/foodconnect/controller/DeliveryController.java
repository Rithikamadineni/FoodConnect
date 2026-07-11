package com.rithika.foodconnect.controller;

import com.rithika.foodconnect.entity.Delivery;
import com.rithika.foodconnect.service.DeliveryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/delivery")
@CrossOrigin("*")
public class DeliveryController {

    private final DeliveryService deliveryService;

    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @PostMapping("/accept")
    public String acceptDelivery(@RequestBody Delivery delivery) {
        return deliveryService.acceptDelivery(delivery);
    }

    @GetMapping("/my/{volunteerName}")
    public List<Delivery> getMyDeliveries(@PathVariable String volunteerName) {
        return deliveryService.getMyDeliveries(volunteerName);
    }

    @PutMapping("/pickup/{id}")
    public String markPickedUp(@PathVariable Long id) {
        return deliveryService.markPickedUp(id);
    }

    @PutMapping("/deliver/{id}")
    public String markDelivered(@PathVariable Long id) {
        return deliveryService.markDelivered(id);
    }
}