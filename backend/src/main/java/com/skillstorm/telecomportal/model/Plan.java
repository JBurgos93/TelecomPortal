package com.skillstorm.telecomportal.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "PLAN")
public class Plan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true)
	private Integer id;
	private String name;
	private Integer cost;
	private String description;
	private Integer currentDevices;
	private Integer maxDevices;
	@OneToMany(mappedBy = "plan", cascade = CascadeType.ALL)
	private Set<Device> device;
	
	public Plan() {
	
	}

	public Plan(Integer id, String name, Integer cost, String description, Integer currentDevices, Integer maxDevices) {
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.description = description;
		this.currentDevices = currentDevices;
		this.maxDevices = maxDevices;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getCurrentDevices() {
		return currentDevices;
	}

	public void setCurrentDevices(Integer currentDevices) {
		this.currentDevices = currentDevices;
	}

	public Integer getMaxDevices() {
		return maxDevices;
	}

	public void setMaxDevices(Integer maxDevices) {
		this.maxDevices = maxDevices;
	}
	

	@Override
	public String toString() {
		return "Plan [id=" + id + ", name=" + name + ", cost=" + cost + ", currentDevices=" + currentDevices
		+ ", maxDevices=" + maxDevices+ ", description=" + description + "]";
	}
	
}
