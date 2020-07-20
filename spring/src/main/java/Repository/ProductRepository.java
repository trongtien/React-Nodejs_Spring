package Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import Entity.product;

public @Repository interface ProductRepository extends CrudRepository<product, String> {

}
