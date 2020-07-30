 package com.sauriengmientay;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class traiCay {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(columnDefinition = "TEXT", name = "product_name")
	private String ten;
	
	@Column(name = "amount")
	private Long so_luong;

	@Column( name = "price")
	private Long gia_ban;
	
	@Column(name = "status_product")
	private int status;
    
    @ManyToOne
    @JoinColumn(name = "category_id")
    private loaiTraiCay loaitraicay;
    
    @OneToMany(mappedBy = "traicay")
	private List<phieuNhap> phieuNhaps = new ArrayList<>();

	public Long getId() {
		return id;
	}
	

	public void setId(Long id) {
		this.id = id;
	}


	public String getTen() {
		return ten;
	}

	public void setTen(String ten) {
		this.ten = ten;
	}

	public Long getSo_luong() {
		return so_luong;
	}

	public void setSo_luong(Long so_luong) {
		this.so_luong = so_luong;
	}

	public Long getGia_ban() {
		return gia_ban;
	}

	public void setGia_ban(Long gia_ban) {
		this.gia_ban = gia_ban;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public loaiTraiCay getLoaitraicay() {
		return loaitraicay;
	}


	public void setLoaitraicay(loaiTraiCay loaitraicay) {
		this.loaitraicay = loaitraicay;
	}


	public List<phieuNhap> getPhieuNhaps() {
		return phieuNhaps;
	}


	public void setPhieuNhaps(List<phieuNhap> phieuNhaps) {
		this.phieuNhaps = phieuNhaps;
	}
	
	
	
}
