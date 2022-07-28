package com.skillstorm.telecomportal.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstorm.telecomportal.model.Device;
import com.skillstorm.telecomportal.model.Plan;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long>{

	Optional<Device> findDeviceById(Long id);

	@Modifying
	@Query("delete from Device d where d.id = :id")
	void deleteDeviceById(@Param("id")Long id);
	
	Optional<List<Device>> findByUserId(Integer id);

	@Modifying
	@Query("select distinct d.plan from Device d where d.user.id = :id")
	List<Plan> findDistinctPlansById(Integer id);

}
