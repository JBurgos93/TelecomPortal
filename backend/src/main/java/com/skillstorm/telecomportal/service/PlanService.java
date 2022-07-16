package com.skillstorm.telecomportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstorm.telecomportal.exception.PlanNotFoundException;
import com.skillstorm.telecomportal.model.Plan;
import com.skillstorm.telecomportal.repository.PlanRepository;

@Service
@Transactional
public class PlanService {
	
	@Autowired
	private final PlanRepository planRepository;

	public PlanService(PlanRepository planRepository) {
		this.planRepository = planRepository;
	}
	
	public Plan savePlan(Plan plan) {
		return planRepository.save(plan);
	}
	
	public List<Plan> getAllPlans() {
		return planRepository.findAll();
	}
	
	public Plan getPlan(Integer id) {
		return planRepository.findPlanById(id)
				.orElseThrow(() -> new PlanNotFoundException("Plan by ID " + id + " was not found"));
	}
	
	public Plan updatePlan(Plan plan) {
		return planRepository.save(plan);
	}
	
	public void deletePlan(Integer id) {
		planRepository.deletePlanById(id);
	}
	
	
}
