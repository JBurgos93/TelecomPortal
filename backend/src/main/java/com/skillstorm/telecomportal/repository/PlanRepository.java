package com.skillstorm.telecomportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skillstorm.telecomportal.model.Plan;

public interface PlanRepository extends JpaRepository<Plan, Integer>{

	Optional<Plan> findPlanById(Integer id);

	void deletePlanById(Integer id);

}
