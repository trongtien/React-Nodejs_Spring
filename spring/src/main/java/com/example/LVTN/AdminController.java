package com.example.LVTN;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class AdminController {
	@Autowired
	private AdminRepository AdRepo;

//	@GetMapping(value = "/sp")
//	public String list(Model model) {
//		model.addAttribute("ADrepo", AdRepo.findAll());
//		return "fruit";
//	}
}
