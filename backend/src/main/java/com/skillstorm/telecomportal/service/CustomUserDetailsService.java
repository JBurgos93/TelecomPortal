package com.skillstorm.telecomportal.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.skillstorm.telecomportal.model.CustomUserDetails;
import com.skillstorm.telecomportal.model.User;
import com.skillstorm.telecomportal.repository.UserRepository;

// Service to retrieve user-related data
@Service
@Transactional
public class CustomUserDetailsService implements UserDetailsService{

    @Autowired
    private UserRepository userRepo;
    // Customizing the process of finding a user by Email
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =  this.userRepo.findByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);
    }
    
}
