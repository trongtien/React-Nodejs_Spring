package com.example.LVTN;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ProductsController {
	@Autowired
	private ProductRepository ProductRepo;

	@RequestMapping(value = "/fruit", method = RequestMethod.GET)
	public String traicaylist(Model model) {
		model.addAttribute("Prepo", ProductRepo.findAll());
		return "fruit";
	}

	@GetMapping("/")
	public String test(Model model) {
		model.addAttribute("msg", "Hello World Spring");
		return "testabc";
	}
}
