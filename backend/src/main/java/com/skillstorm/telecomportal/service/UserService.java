package com.skillstorm.telecomportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.telecomportal.exception.UserNotFoundException;
import com.skillstorm.telecomportal.model.Plan;
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
	
	public User getUser(Integer id) {
		return userRepository.findUserById(id)
				.orElseThrow(() -> new UserNotFoundException("User by ID " + id + " was not found"));
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
	
	public Integer monthlyBill(Integer id) {
		return userRepository.monthlyBill(id);
	}
	
}
