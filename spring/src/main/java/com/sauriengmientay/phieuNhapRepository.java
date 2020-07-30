package com.sauriengmientay;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

public @Repository interface phieuNhapRepository extends CrudRepository<phieuNhap, Long> {

	@Modifying
	@Transactional
	@Query(value="update products set products.amount=products.amount+:sl where products.id = :id ", nativeQuery = true) 
	public void updateSl(@Param("sl") Long sl, @Param("id") Long id);
	
}
