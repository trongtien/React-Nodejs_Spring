package com.sauriengmientay;

import java.util.Comparator;

import com.sauriengmientay.Entity.PhieuNhap;

public class PhieuNhapByDate implements Comparator<PhieuNhap> {
	@Override
	public int compare(PhieuNhap o1, PhieuNhap o2) {
		return o2.getDate().compareTo(o1.getDate());
	}
}
