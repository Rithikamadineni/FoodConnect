package com.rithika.foodconnect.service;

import com.rithika.foodconnect.entity.User;

import java.util.List;

public interface AdminService {

    List<User> getAllUsers();

    String approveUser(Long id);

    String deleteUser(Long id);
}