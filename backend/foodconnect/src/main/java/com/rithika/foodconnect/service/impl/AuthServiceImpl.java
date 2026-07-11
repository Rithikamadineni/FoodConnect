package com.rithika.foodconnect.service.impl;

import com.rithika.foodconnect.dto.LoginRequest;
import com.rithika.foodconnect.dto.RegisterRequest;
import com.rithika.foodconnect.entity.User;
import com.rithika.foodconnect.enums.Role;
import com.rithika.foodconnect.enums.UserStatus;
import com.rithika.foodconnect.repository.UserRepository;
import com.rithika.foodconnect.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already exists";
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .password(request.getPassword())
                .phone(request.getPhone())
                .role(request.getRole())
                .organizationName(request.getOrganizationName())
                .registrationNumber(request.getRegistrationNumber())
                .city(request.getCity())
                .address(request.getAddress())
                .status(request.getRole() == Role.DONOR ? UserStatus.ACTIVE : UserStatus.PENDING)
                .verified(false)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        userRepository.save(user);

        return "User Registered Successfully";
    }

    @Override
    public User login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid Password");
        }

        return user;
    }
}