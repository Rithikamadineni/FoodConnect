package com.rithika.foodconnect.service.impl;

import com.rithika.foodconnect.entity.User;
import com.rithika.foodconnect.enums.UserStatus;
import com.rithika.foodconnect.repository.UserRepository;
import com.rithika.foodconnect.service.AdminService;
import org.springframework.stereotype.Service;
import com.rithika.foodconnect.exception.ResourceNotFoundException;
import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    private final UserRepository userRepository;

    public AdminServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public String approveUser(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        user.setStatus(UserStatus.ACTIVE);

        userRepository.save(user);

        return "User Approved Successfully";
    }

    @Override
    public String deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new ResourceNotFoundException("User not found");

        }

        userRepository.deleteById(id);

        return "User Deleted Successfully";
    }
}