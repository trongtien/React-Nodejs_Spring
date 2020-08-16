package com.sauriengmientay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sauriengmientay.Embeded.OrderDetailIdentity;
import com.sauriengmientay.Entity.OrderDetail;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailIdentity> {

}
