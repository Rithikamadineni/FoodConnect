package com.rithika.foodconnect.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rithika.foodconnect.enums.Role;
import com.rithika.foodconnect.enums.UserStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String password;

    private String phone;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String organizationName;

    private String registrationNumber;

    private String city;

    private String address;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    private boolean verified;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}