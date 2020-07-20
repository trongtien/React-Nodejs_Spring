package com.example.LVTN;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "admins")
public class admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idAdmin;
	@Column(name = "level")
	private int level;
	@Column(name = "fullname")
	private String fullnameAdmin;
	@Column(name = "username")
	private String usernameAdmin;
	@Column(name = "password")
	private String passwordAdmin;
	@Column(name = "email")
	private String emailAdmin;
	@Column(name = "phone")
	private int phoneAdmin;
	@Column(name = "address")
	private String addressAdmin;

	public admin() {
		// TODO Auto-generated constructor stub
	}

}
