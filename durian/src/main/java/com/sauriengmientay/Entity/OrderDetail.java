package com.sauriengmientay.Entity;

import java.text.NumberFormat;
import java.util.Locale;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;


import com.sauriengmientay.Embeded.OrderDetailIdentity;

@Entity
@Table(name = "orderdetails")
public class OrderDetail {
	@EmbeddedId
	private OrderDetailIdentity orderDetailId = new OrderDetailIdentity();

	@ManyToOne
	@MapsId("orderId")
	@JoinColumn(name = "order_id")
	private Order order;

	@ManyToOne
	@MapsId("fruitId")
	@JoinColumn(name = "product_id")
	private Fruit fruit;

	@Column(name = "amount")
	private Long quantity;

	@Column(name = "price")
	private double cost;

	@Column(name = "note")
	private String note;

	public OrderDetailIdentity getOrderDetailId() {
		return orderDetailId;
	}

	public void setOrderDetailId(OrderDetailIdentity orderDetailId) {
		this.orderDetailId = orderDetailId;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public double getCost() {
		return cost;
	}
	
	public String calculateCostFormat() {
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		String currency = format.format(this.quantity*this.fruit.getPriceWithDiscount());
		return currency;
	}
	
	public double calculateCost() {
		return this.quantity*this.fruit.getPriceWithDiscount();
	}

	public String getQuantityFormat() {
		NumberFormat format = NumberFormat.getIntegerInstance();
		String qty = format.format(quantity);
		return qty;
	}
	
	public String getPriceFormat() {
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		String currency = format.format(cost);
		return currency;
	}
	
	public void setCost(Long cost) {
		this.cost = cost;
	}
	
	public void setCost() {
		this.cost = this.quantity*this.fruit.getPriceWithDiscount();
	}

	public String getNote() {
		return note;
	}

	public void setNote(String note) {
		this.note = note;
	}

	public Order getOrder() {
		return order;
	}

	public void setOrder(Order order) {
		this.order = order;
	}

	public Fruit getFruit() {
		return fruit;
	}

	public void setFruit(Fruit fruit) {
		this.fruit = fruit;
	}

}
