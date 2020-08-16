package com.sauriengmientay.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.Permission;


@Repository
public interface PermissionRepository  extends JpaRepository<Permission, Long>{

	public List<Permission> findByPermissionName(String name);
}
