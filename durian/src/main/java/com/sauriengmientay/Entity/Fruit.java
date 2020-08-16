package com.sauriengmientay.Entity;

import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Locale;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "products")
public class Fruit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	private Long id;

	@Column(name = "name")
	private String name;

//	amount
	@Column(name = "quantity")
	private Long quantity;

	@Column(name = "image")
	private String image;

//  false is deleted, true is active
	@Column(name = "status")
	private Boolean status;

	@Column(name = "price")
	private Long price;

	@Column(name = "discount")
	private Long discount;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@OneToMany(mappedBy = "fruit", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<PhieuNhap> phieuNhaps = new ArrayList<>();

	@OneToMany(mappedBy = "fruit", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private Set<OrderDetail> orderDetails = new HashSet<OrderDetail>();

	public Fruit() {
		this.quantity = (long) 0;
		this.status = true;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(Set<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

	public Long getQuantity() {
		return quantity;
	}

	public Long getPrice() {
		return price;
	}

	public Long getPriceWithDiscount() {
		return (long) (this.price * ((double) (100 - this.discount) / 100));
	}

	public String getQuantityFormat() {
		NumberFormat format = NumberFormat.getIntegerInstance();
		String qty = format.format(quantity);
		return qty;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public String getPriceFormat() {
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		String currency = format.format((long) (this.price * ((double) (100 - this.discount) / 100)));
		return currency;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public List<PhieuNhap> getPhieuNhaps() {
		return phieuNhaps;
	}

	public void setPhieuNhaps(List<PhieuNhap> phieuNhaps) {
		this.phieuNhaps = phieuNhaps;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Long getDiscount() {
		return discount;
	}

	public void setDiscount(Long discount) {
		this.discount = discount;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

}
