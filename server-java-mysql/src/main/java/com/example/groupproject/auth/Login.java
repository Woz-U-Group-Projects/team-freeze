package com.example.groupproject.auth;



import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class Login {

	@GeneratedValue(strategy = GenerationType.AUTO)
	private String username;

	private String password;

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}

