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
@Table(name = "users")
public class userss {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idUser;
	@Column(name = "level")
	private int level;
	@Column(name = "fullname")
	private String fullnameUser;
	@Column(name = "username")
	private String usernameUser;
	@Column(name = "password")
	private String passwordAUser;
	@Column(name = "email")
	private String emailUser;
	@Column(name = "phone")
	private int phoneUser;
	@Column(name = "address")
	private String addressUser;

	public userss() {
		// TODO Auto-generated constructor stub
	}

}
