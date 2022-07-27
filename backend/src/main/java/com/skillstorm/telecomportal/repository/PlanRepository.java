package com.skillstorm.telecomportal.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.telecomportal.model.Plan;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Integer>{

	Optional<Plan> findPlanById(Integer id);

	void deletePlanById(Integer id);

}
