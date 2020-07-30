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
@Table(name= "categories")
public class loaiTraiCay {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	
	@Column(columnDefinition = "TEXT", name = "name")
	private String loai;

	@OneToMany(mappedBy = "loaitraicay")
	private List<traiCay> traicays = new ArrayList<>();

	public Long getId() {
		return id;
	}


	public String getLoai() {
		return loai;
	}


	public void setLoai(String loai) {
		this.loai = loai;
	}


	public List<traiCay> getTraicays() {
		return traicays;
	}


	public void setTraicays(List<traiCay> traicays) {
		this.traicays = traicays;
	}
	
	

}
