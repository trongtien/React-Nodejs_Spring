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
@Table(name = "comments")
public class comments {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idComment;
	@Column(name = "product_id")
	private String idProduct;

	@Column(name = "user_id")
	private String userid;

	public comments() {
		// TODO Auto-generated constructor stub
	}

}
