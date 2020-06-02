package com.example.groupprojects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userid;
	private String firstname;
	private String lastname;
	private String username;
	private String password;
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	private String role;
	private String gradelevel;

	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getGradelevel() {
		return gradelevel;
	}

	public void setGradelevel(String gradelevel) {
		this.gradelevel = gradelevel;
	}

	@Column(columnDefinition = "boolean default false")
	private boolean complete;

	public boolean getComplete() {
		return this.complete;
	}

	public void setComplete(boolean complete) {
		this.complete = complete;
	}

}
