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
import com.skillstorm.telecomportal.service.PlanService;

@RestController
@RequestMapping("/plan")
public class PlanController {

	@Autowired
	PlanService planService;
	
	@GetMapping("/all")
	public ResponseEntity<List<Plan>> getAllPlans () {
		List<Plan> plans = planService.getAllPlans();
		return new ResponseEntity<>(plans, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
    public ResponseEntity<Plan> getPlan(@PathVariable("id") Integer id) {
		Plan plan = planService.getPlan(id);
        return new ResponseEntity<>(plan, HttpStatus.OK);
    }
	
	@PostMapping("/add")
    public ResponseEntity<Plan> addPlan(@RequestBody Plan plan) {
		Plan newPlan = planService.savePlan(plan);
        return new ResponseEntity<>(newPlan, HttpStatus.CREATED);
    }
	
	@PutMapping("/update")
    public ResponseEntity<Plan> updatePlan(@RequestBody Plan plan) {
		Plan updatePlan = planService.updatePlan(plan);
        return new ResponseEntity<>(updatePlan, HttpStatus.OK);
    }
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePlan(@PathVariable("id") Integer id) {
		planService.deletePlan(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
