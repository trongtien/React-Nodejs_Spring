package com.sauriengmientay;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class loaiTraiCayController {

	@Autowired
	private loaiTraiCayRepository loaiRepo;
	@GetMapping(value = "/kindoffruit")
	public String loaitraicaylist(Model model) {
		model.addAttribute("LTC", loaiRepo.findAll());
		return "kindoffruit";
	}
	public String traicaylist(Model model) {
		model.addAttribute("LTC", loaiRepo.findAll());
		return "addfruit";
	}
	@GetMapping("/addloai")
	public String addget(Model model) {
		model.addAttribute("addloai", new loaiTraiCay());
		return "addloai";
	}

	@PostMapping("/addloai")
	public String addpost(@ModelAttribute("addloai") @Valid loaiTraiCay newloaitraicay, Model model, BindingResult result) {
		loaiRepo.save(newloaitraicay);
		model.addAttribute("addloai", loaiRepo.findAll());
		return "fruit";
	}
}
