package com.sauriengmientay;

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
@Table(name="supplier")
public class nhaCungCap {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Column(columnDefinition = "TEXT", name="ten")
	private String ten;
	
	
	@Column(columnDefinition = "TEXT", name="dia_chi")
	private String dia_chi;
	
	
	@Column(name="so_dt")
	private String so_dt;

	@Column(name="status")
	private int status;
	
	@OneToMany(mappedBy = "nhacungcap")
	private List<phieuNhap> nhieunhaps = new ArrayList<>();

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


	public String getDia_chi() {
		return dia_chi;
	}


	public void setDia_chi(String dia_chi) {
		this.dia_chi = dia_chi;
	}


	public String getSo_dt() {
		return so_dt;
	}


	public void setSo_dt(String so_dt) {
		this.so_dt = so_dt;
	}


	public int getStatus() {
		return status ;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public List<phieuNhap> getNhieunhaps() {
		return nhieunhaps;
	}


	public void setNhieunhaps(List<phieuNhap> nhieunhaps) {
		this.nhieunhaps = nhieunhaps;
	}

	
	
}
