package Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "products")
public class product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String idProduct;
	@Column(name = "category_id")
	private int idLoai;
	@Column(name = "product_name")
	private String nameProduct;
	@Column(name = "price")
	private int price;
	@Column(name = "discount")
	private int km;
	@Column(name = "status_product")
	private String statusProduct;

	public product() {
		// TODO Auto-generated constructor stub
	}

}
