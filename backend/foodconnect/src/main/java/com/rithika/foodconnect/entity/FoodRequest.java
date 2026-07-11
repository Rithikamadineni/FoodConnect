package com.rithika.foodconnect.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "food_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FoodRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long foodId;

    private String ngoName;

    private String contactNumber;

    private String status;
}