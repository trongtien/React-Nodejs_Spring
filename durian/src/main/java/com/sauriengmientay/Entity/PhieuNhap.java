package com.sauriengmientay.Entity;

import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "import_invoice")
public class PhieuNhap {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "import_id")
	private Long id;

	@Column(name = "date")
	private Long date;

	@Column(name = "quantity")
	private Long quantity;

	@Column(name = "von")
	private Long von;

	@ManyToOne
	@JoinColumn(name = "supplier_id")
	private Supplier supplier;

	@ManyToOne
	@JoinColumn(name = "product_id")
	private Fruit fruit;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDate() {
		return date;
	}
	
	public String getDateFormat(String template) {
		DateFormat df = new SimpleDateFormat(template);
		Date currentDate = new Date(this.date);
		return df.format(currentDate);
	}

	public void setDate(Date date) {
		this.date = date.getTime();
	}

	public String getQuantity() {
		NumberFormat format = NumberFormat.getIntegerInstance();
		String qty = format.format(quantity);
		return qty;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getVon() {
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		String currency = format.format(von);
		return currency;
	}
	
	public String getVonEachPro() {
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		Long price = von/this.quantity;
		String currency = format.format(price);
		return currency;
	}

	public void setVon(Long von) {
		this.von = von;
	}

	public Supplier getSupplier() {
		return supplier;
	}

	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}

	public Fruit getFruit() {
		return fruit;
	}

	public void setFruit(Fruit fruit) {
		this.fruit = fruit;
	}
}
