package com.sauriengmientay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.PhieuNhap;
@Repository
public interface PhieuNhapRepository extends JpaRepository<PhieuNhap, Long> {
}
