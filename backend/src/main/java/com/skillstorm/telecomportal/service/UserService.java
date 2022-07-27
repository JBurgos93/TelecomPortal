package com.skillstorm.telecomportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.telecomportal.exception.UserNotFoundException;
import com.skillstorm.telecomportal.model.User;
import com.skillstorm.telecomportal.repository.UserRepository;

@Service
@Transactional
public class UserService {
	@Autowired
	private final UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}
		
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public User getUser(String email) {
		return userRepository.findUserByEmail(email)
				.orElseThrow(() -> new UserNotFoundException("User with email " + email + " was not found"));
	}
	
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(Integer id) {
		userRepository.deleteUserById(id);
	}

	public boolean existsByEmail(String email) {
		return userRepository.existsByEmail(email);
	}
	
	public Integer monthlyBill(Integer id) {
		return userRepository.monthlyBill(id);
	}
	
}
