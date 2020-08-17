package com.sauriengmientay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Entity.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
