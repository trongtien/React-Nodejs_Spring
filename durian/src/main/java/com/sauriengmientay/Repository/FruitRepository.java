package com.sauriengmientay.Repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.Fruit;
@Repository
public interface FruitRepository extends JpaRepository<Fruit, Long> {
	@Query("SELECT f FROM Fruit f WHERE f.category.name LIKE %?1%")
	List<Fruit> findByCategoryName(String name);
	
	@Query("SELECT f FROM Fruit f WHERE f.name LIKE %?1%")
	List<Fruit> findByName(String name);
	
	@Query("select f from Fruit f where f.status=true and f.category.status=true")
	List<Fruit> findActiveFruit();
	
	@Query("select f from Fruit f where f.status=false or f.category.status=false")
	List<Fruit> findDeletedFruit();
	
	@Transactional
	@Modifying
	@Query("delete from Fruit f where f.status=false")
	void deleteDeactiveFruit();
}
