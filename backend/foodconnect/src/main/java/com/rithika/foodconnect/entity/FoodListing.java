package com.rithika.foodconnect.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "food_listings")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FoodListing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String foodName;

    private String category;

    private Integer quantity;

    private String location;

    private String expiryTime;

    private String status;

    @ManyToOne
    @JoinColumn(name = "donor_id")
    private User donor;
}