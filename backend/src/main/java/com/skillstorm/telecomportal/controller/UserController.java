package com.skillstorm.telecomportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.telecomportal.model.Plan;
import com.skillstorm.telecomportal.model.User;
import com.skillstorm.telecomportal.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
    UserService userService;
	
	@GetMapping("/all")
	public ResponseEntity<List<User>> getAllUsers () {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Integer id) {
        User user = userService.getUser(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
	
	@PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.saveUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
	
	@PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user) {
		User updateUser = userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Integer id) {
		userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping("/bill")
	public ResponseEntity<Integer> getMonthlyBill(@RequestBody User user) {
		Integer billAmount = userService.monthlyBill(user.getId());
		return new ResponseEntity<>(billAmount, HttpStatus.OK);
	}
}
