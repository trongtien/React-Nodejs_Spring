package com.sauriengmientay.Embeded;

import java.io.Serializable;

import javax.persistence.Embeddable;

@Embeddable
public class OrderDetailIdentity implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long fruitId;
	private Long orderId;

	public Long getFruitId() {
		return fruitId;
	}

	public void setFruitId(Long fruitId) {
		this.fruitId = fruitId;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

}
