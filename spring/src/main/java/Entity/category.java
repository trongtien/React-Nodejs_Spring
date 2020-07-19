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
@Table(name = "categories")

public class category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idCategory;
	@Column(name = "name")
	private String name;

	public category() {
		// TODO Auto-generated constructor stub
	}

}
