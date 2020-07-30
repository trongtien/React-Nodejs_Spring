package com.sauriengmientay;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

public @Repository interface nhaCungCapRepository extends CrudRepository<nhaCungCap, Long> {
	
	
	
	@Modifying
	@Transactional
	@Query(value="update supplier set status=1 where id= :id ", nativeQuery = true) 
	public void editcheckid(@Param("id") Long id);
	@Query(value="select* from supplier where status=0", nativeQuery=true) List<nhaCungCap> listsupplier();
}
