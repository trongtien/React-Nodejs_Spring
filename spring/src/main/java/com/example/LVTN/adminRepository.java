package com.example.LVTN;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public @Repository interface AdminRepository extends CrudRepository<admin, String> {

}
