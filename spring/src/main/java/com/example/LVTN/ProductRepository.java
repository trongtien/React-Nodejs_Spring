package com.example.LVTN;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public @Repository interface ProductRepository extends CrudRepository<product, String> {

}
