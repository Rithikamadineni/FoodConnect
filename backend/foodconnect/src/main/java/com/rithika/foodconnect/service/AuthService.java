package com.rithika.foodconnect.service;

import com.rithika.foodconnect.dto.LoginRequest;
import com.rithika.foodconnect.dto.RegisterRequest;
import com.rithika.foodconnect.entity.User;

public interface AuthService {

    String register(RegisterRequest request);

    User login(LoginRequest request);

}