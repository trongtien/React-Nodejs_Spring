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
@Table(name = "orders")
public class order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idOrder;
	@Column(name = "user_id")
	private String userid;
	@Column(name = "status_order")
	private String statusOrder;

	public order() {
		// TODO Auto-generated constructor stub
	}

}
