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

import com.skillstorm.telecomportal.model.Device;
import com.skillstorm.telecomportal.model.Plan;
import com.skillstorm.telecomportal.model.User;
import com.skillstorm.telecomportal.service.DeviceService;

@RestController
@RequestMapping("/device")
public class DeviceController {
	
	@Autowired
	DeviceService deviceService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Device>> getAllDevices () {
		List<Device> devices = deviceService.getAllDevices();
		return new ResponseEntity<>(devices, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
    public ResponseEntity<Device> getDevice(@PathVariable("id") Long id) {
		Device device = deviceService.getDevice(id);
        return new ResponseEntity<>(device, HttpStatus.OK);
    }
	
	@PostMapping("/add")
    public ResponseEntity<Device> addDevice(@RequestBody Device device) {
		Device newDevice = deviceService.saveDevice(device);
        return new ResponseEntity<>(newDevice, HttpStatus.CREATED);
    }
	
	@PutMapping("/update")
    public ResponseEntity<Device> updateDevice(@RequestBody Device device) {
		Device updateDevice = deviceService.updateDevice(device);
        return new ResponseEntity<>(updateDevice, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteDevice(@PathVariable("id") Long id) {
		deviceService.deleteDevice(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
	
	@GetMapping("/all/user")
	public ResponseEntity<List<Device>> getAllDevicesByUser(@RequestBody User user) {
		List<Device> devices = deviceService.getAllDevicesByUser(user);
		return new ResponseEntity<>(devices, HttpStatus.OK);
	}

}
