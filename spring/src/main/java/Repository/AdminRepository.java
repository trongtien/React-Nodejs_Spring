package Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Entity.admin;

public @Repository interface AdminRepository extends CrudRepository<admin, String> {

}
