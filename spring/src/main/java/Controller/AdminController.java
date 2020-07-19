package Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import Repository.AdminRepository;

@Controller
public class AdminController {
	@Autowired
	private AdminRepository AdRepo;

	@GetMapping(value = "/sp")
	public String list(Model model) {
		model.addAttribute("ADrepo", AdRepo.findAll());
		return "sanpham";
	}
}
