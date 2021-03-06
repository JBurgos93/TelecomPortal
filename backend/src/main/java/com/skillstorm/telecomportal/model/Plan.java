package com.skillstorm.telecomportal.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "PLAN")
public class Plan {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PLAN_ID", unique = true)
	private Integer id;
	private String name;
	private Integer price;
	private Integer deviceLimit;
	private String description;
	@OneToOne(mappedBy = "plan", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY)
	private Device device;
	
	public Plan() {
	
	}

	public Plan(Integer id, String name, Integer price, Integer deviceLimit, String description) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.deviceLimit = deviceLimit;
		this.description = description;
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

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public Integer getDeviceLimit() {
		return deviceLimit;
	}

	public void setDeviceLimit(Integer deviceLimit) {
		this.deviceLimit = deviceLimit;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Plan [id=" + id + ", name=" + name + ", price=" + price + ", deviceLimit=" + deviceLimit
				+ ", description=" + description + "]";
	}
	
}
