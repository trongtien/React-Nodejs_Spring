package com.example.LVTN;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private String idProduct;
	@Column(name = "category_id")
	private int idLoai;
	@Column(name = "product_name")
	private String nameProduct;
	@Column(name = "price")
	private int price;
	@Column(name = "discount")
	private int km;
	@Column(name = "status_product")
	private String statusProduct;

	public String getIdProduct() {
		return idProduct;
	}

	public void setIdProduct(String idProduct) {
		this.idProduct = idProduct;
	}

	public int getIdLoai() {
		return idLoai;
	}

	public void setIdLoai(int idLoai) {
		this.idLoai = idLoai;
	}

	public String getNameProduct() {
		return nameProduct;
	}

	public void setNameProduct(String nameProduct) {
		this.nameProduct = nameProduct;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getKm() {
		return km;
	}

	public void setKm(int km) {
		this.km = km;
	}

	public String getStatusProduct() {
		return statusProduct;
	}

	public void setStatusProduct(String statusProduct) {
		this.statusProduct = statusProduct;
	}

	public product() {
		// TODO Auto-generated constructor stub
	}

}
