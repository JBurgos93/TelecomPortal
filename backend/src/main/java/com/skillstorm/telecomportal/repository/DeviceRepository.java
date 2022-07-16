package com.skillstorm.telecomportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.telecomportal.model.Device;
import com.skillstorm.telecomportal.model.Plan;

public interface DeviceRepository extends JpaRepository<Device, Long>{

	Optional<Device> findDeviceById(Long id);

	void deleteDeviceById(Long id);
	
	Optional<List<Device>> findByUserId(Integer id);

}
