package com.rithika.foodconnect.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "deliveries")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long requestId;

    private String volunteerName;

    private String volunteerPhone;

    private String status;
}