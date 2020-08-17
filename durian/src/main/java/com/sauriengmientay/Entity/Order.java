package com.sauriengmientay.Entity;

import java.text.DateFormat;
import java.text.NumberFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "orders")
public class Order {
	@Id
	@Column(name = "order_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(name = "status_order")
	private Integer status;

	@Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date ngaytao;

	@Column(name = "updated_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date ngayupdate;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	@OneToMany(mappedBy = "order")
	private Set<OrderDetail> orderDetails = new HashSet<OrderDetail>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getCreateDateFormat(String template) {
		DateFormat df = new SimpleDateFormat(template);
		Date currentDate = this.ngaytao;
		return df.format(currentDate);
	}
	
	public String getTotal() {
		Double cost = 0.0;
		for (OrderDetail o : this.orderDetails) {
			cost+=o.calculateCost();
		}
		Locale.setDefault(new Locale("vi", "VN"));
		NumberFormat format = NumberFormat.getCurrencyInstance(Locale.getDefault());
		String currency = format.format(cost);
		return currency;
	}
	public String getUpdateDateFormat(String template) {
		DateFormat df = new SimpleDateFormat(template);
		Date currentDate = this.ngayupdate;
		return df.format(currentDate);
	}
	
	public Date getNgaytao() {
		return ngaytao;
	}

	public void setNgaytao(Date ngaytao) {
		this.ngaytao = ngaytao;
	}

	public Date getNgayupdate() {
		return ngayupdate;
	}

	public void setNgayupdate(Date ngayupdate) {
		this.ngayupdate = ngayupdate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<OrderDetail> getOrderDetails() {
		return orderDetails;
	}

	public void setOrderDetails(Set<OrderDetail> orderDetails) {
		this.orderDetails = orderDetails;
	}

}
