package com.skillstorm.telecomportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.telecomportal.exception.DeviceNotFoundException;
import com.skillstorm.telecomportal.exception.PlanNotFoundException;
import com.skillstorm.telecomportal.exception.UserNotFoundException;
import com.skillstorm.telecomportal.model.Device;
import com.skillstorm.telecomportal.model.Plan;
import com.skillstorm.telecomportal.model.User;
import com.skillstorm.telecomportal.repository.DeviceRepository;

@Service
@Transactional
public class DeviceService {
	
	@Autowired
	private final DeviceRepository deviceRepository;

	public DeviceService(DeviceRepository deviceRepository) {
		this.deviceRepository = deviceRepository;
	}
	
	
	public Device saveDevice(Device device) {
		return deviceRepository.save(device);
	}
	
	public List<Device> getAllDevices() {
		return deviceRepository.findAll();
	}
	
	public Device getDevice(Long id) {
		return deviceRepository.findDeviceById(id)
				.orElseThrow(() -> new DeviceNotFoundException("Device with ID " + id + " was not found"));
	}
	
	public Device updateDevice(Device device) {
		return deviceRepository.save(device);
	}
	
	public void deleteDevice(Long id) {
		deviceRepository.deleteDeviceById(id);
	}
	
	public List<Device> getAllDevicesByUser(User user) {
		return deviceRepository.findByUserId(user.getId())
				.orElseThrow(() -> new UserNotFoundException("User by ID " + user.getId() + " was not found"));
	}
	
}
