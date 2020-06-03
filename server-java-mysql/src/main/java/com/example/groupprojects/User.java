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
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
<<<<<<< HEAD:server-java-mysql/src/main/java/com/example/groupproject/models/User.java
	
	 @Column(nullable = false, unique = true)
=======

	@Column(name = "firstname")
>>>>>>> 64a778bceecf6f1c5f955e1a599ae59968009b60:server-java-mysql/src/main/java/com/example/groupprojects/User.java
	private String firstname;

	@Column(name = "lastname")
	private String lastname;

	@Column(name = "username")
	private String username;
<<<<<<< HEAD:server-java-mysql/src/main/java/com/example/groupproject/models/User.java
	private String password;
	private String role;
	
	public Long getId() {
		return id;
	}
=======

	@Column(name = "password")
	private String password;

	@Column(name = "role")
	private String role;

	public Long getId() {
		return id;
	}

>>>>>>> 64a778bceecf6f1c5f955e1a599ae59968009b60:server-java-mysql/src/main/java/com/example/groupprojects/User.java
	public void setId(Long id) {
		this.id = id;
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
<<<<<<< HEAD:server-java-mysql/src/main/java/com/example/groupproject/models/User.java
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
=======

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

>>>>>>> 64a778bceecf6f1c5f955e1a599ae59968009b60:server-java-mysql/src/main/java/com/example/groupprojects/User.java
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

}
