package com.sauriengmientay.Entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "supplier")
public class Supplier {

	@Id
	@Column(name = "supplier_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(columnDefinition = "TEXT", name = "name")
	private String name;

	@Column(columnDefinition = "TEXT", name = "address")
	private String address;

	@Column(name = "phone")
	private String phone;

	@OneToMany(mappedBy = "supplier")
	private List<PhieuNhap> phieunhaps = new ArrayList<>();

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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<PhieuNhap> getPhieunhaps() {
		return phieunhaps;
	}

	public void setPhieunhaps(List<PhieuNhap> phieunhaps) {
		this.phieunhaps = phieunhaps;
	}

}
