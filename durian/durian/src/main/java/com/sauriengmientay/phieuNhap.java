package com.sauriengmientay;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="import_invoice")
public class phieuNhap {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(name = "ngay")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date ngay;
	
	
	@Column(name = "so_luong")
	private Long so_luong;
	
	@Column(name = "gia_von")
	private Long gia_von;
	
	 @ManyToOne
	    @JoinColumn(name = "supplier_id")
	 private nhaCungCap nhacungcap;
	 @ManyToOne
	    @JoinColumn(name = "fruit_id")
	 private traiCay traicay;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	

	public Date getNgay() {
		return ngay;
	}

	public void setNgay(Date ngay) {
		this.ngay = ngay;
	}

	public Long getSo_luong() {
		return so_luong;
	}

	public void setSo_luong(Long so_luong) {
		this.so_luong = so_luong;
	}

	public Long getGia_von() {
		return gia_von;
	}

	public void setGia_von(Long gia_von) {
		this.gia_von = gia_von;
	}

	public nhaCungCap getNhacungcap() {
		return nhacungcap;
	}

	public void setNhacungcap(nhaCungCap nhacungcap) {
		this.nhacungcap = nhacungcap;
	}

	public traiCay getTraicay() {
		return traicay;
	}

	public void setTraicay(traiCay traicay) {
		this.traicay = traicay;
	}
	
	
	
	
}
