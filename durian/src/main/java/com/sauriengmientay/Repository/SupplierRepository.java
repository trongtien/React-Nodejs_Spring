package com.sauriengmientay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.Supplier;
@Repository
public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}
