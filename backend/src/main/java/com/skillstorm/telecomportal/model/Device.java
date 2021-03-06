package com.skillstorm.telecomportal.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "DEVICES")
public class Device  implements Serializable {
	
	@Id
	@Column(unique = true)
	private Long id;
	private String phoneNum;
	@ManyToOne(optional = false)
    @JoinColumn(name = "USER_ID", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
	private User user;
	@OneToOne(optional = false)
    @JoinColumn(name = "PLAN_ID", nullable = false)
	private Plan plan;
	
	public Device() {

	}

	public Device(Long id, String phoneNum, User user, Plan plan) {

		this.id = id;
		this.phoneNum = phoneNum;
		this.user = user;
		this.plan = plan;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPhoneNum() {
		return phoneNum;
	}

	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Plan getPlan() {
		return plan;
	}

	public void setPlan(Plan plan) {
		this.plan = plan;
	}

	@Override
	public String toString() {
		return "Device [id=" + id + ", phoneNum=" + phoneNum + ", user=" + user + ", plan=" + plan + "]";
	}
	
}
