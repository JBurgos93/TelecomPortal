package com.skillstorm.telecomportal.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name = "DEVICES")
public class Device  implements Serializable {
	
	@Id
	@Column(unique = true)
	private Long id;
	private Long phoneNumber;
	@ManyToOne(optional = false)
    @JoinColumn(name = "USER_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
	private User user;
	@ManyToOne(optional = false)
    @JoinColumn(name = "PLAN_ID", nullable = false)
	private Plan plan;
	
	public Device() {

	}

	public Device(Long id, Long phoneNumber, User user, Plan plan) {

		this.id = id;
		this.phoneNumber = phoneNumber;
		this.user = user;
		this.plan = plan;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Integer getUser() {
		return user.getId();
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getPlan() {
		return plan.getId();
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	@Override
	public String toString() {
		return "Device [id=" + id + ", phoneNumber=" + phoneNumber + ", user=" + user + ", plan=" + plan + "]";
	}
	
}
