package com.sauriengmientay.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query("SELECT u FROM User u WHERE u.fullname LIKE %?1%")
	List<User> searchByFullname(String fullname);
	
	@Query("SELECT u FROM User u WHERE u.email=?1")
	List<User> searchByEmail(String email);
	
	@Query("SELECT u FROM User u WHERE u.phone=?1")
	List<User> searchByPhone(String phone);
	
	public User findByUsername(String username);

	public User findByPhone(String phone);

	public User findByEmail(String email);
}
