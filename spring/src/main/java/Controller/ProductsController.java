package Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import Repository.ProductRepository;

@Controller
public class ProductsController {
	@Autowired
	private ProductRepository ProductRepo;

	@GetMapping(value = "/index")
	public String list(Model model) {
		model.addAttribute("Prepo", ProductRepo.findAll());
		return "fruit";
	}
}
