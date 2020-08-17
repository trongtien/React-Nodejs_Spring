package com.sauriengmientay.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	@Query("select c from Category c where c.status=true")
	List<Category> findActiveCat();
	
	@Query("select c from Category c where c.status=false")
	List<Category> findDeletedCat();
	
	@Transactional
	@Modifying
	@Query("delete from Category c where c.status=false")
	void deleteDeactiveCategory();
	
	@Query("SELECT c FROM Category c WHERE c.name LIKE %?1%")
	List<Category> findByName(String name);
}
