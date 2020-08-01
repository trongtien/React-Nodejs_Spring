package com.sauriengmientay;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class traiCayController {

	@Autowired
	private traiCayRepository traicayRepo;
	@Autowired
	private loaiTraiCayRepository loaiRepo;

	@GetMapping(value = "/fruit")
	public String traicaylist(Model model) {
		model.addAttribute("TC", traicayRepo.listfruit());
		return "fruit";
	}

	@GetMapping("/addfruit")
	public String addget(Model model) {
		model.addAttribute("LTC", loaiRepo.findAll());
		model.addAttribute("addfruit", new traiCay());
		return "addfruit";
	}
	@GetMapping("/icon")
	public String iconget(Model model) {

		return "icon";
	}

	@PostMapping("/addfruit")
	public String addpost(@ModelAttribute("addfruit") @Valid traiCay newtraicay, Model model, BindingResult result) {
		traicayRepo.save(newtraicay);
		model.addAttribute("addfruit", traicayRepo.findAll());
		return "redirect:/fruit";
	}

	@GetMapping("/editfruit/{id}")
	public String editf(@PathVariable("id") Long idedit, Model model) {
		traiCay f = new traiCay();
		f = traicayRepo.findById(idedit).orElseThrow(() -> new IllegalArgumentException("Khong co Id :" + idedit));
		model.addAttribute("LTC", loaiRepo.findAll());
		model.addAttribute("fedit", f);

		return "editfruit";
	}

	@PostMapping("editfruit/{id}")
	public String editpostf(@PathVariable("id") Long idedit, @Valid traiCay f1, BindingResult result, Model model) {
		if (result.hasErrors()) {
			f1.setId(idedit);
			return "editfruit";
		}
		model.addAttribute("fedit", traicayRepo.findById(idedit));
		traicayRepo.save(f1);

		return "redirect:/fruit";
	}

	@GetMapping("/deletefruit/{id}")
	public String xoaget(@PathVariable("id") Long iddelete, Model model) {
		traiCay f = new traiCay();
		f = traicayRepo.findById(iddelete).orElseThrow(() -> new IllegalArgumentException("Khong co Id :" + iddelete));
		model.addAttribute("fdelete", f);
		return "deletefruit";
	}

	@PostMapping("/deletefruit/{id}")
	public String xoapost(@RequestParam(value = "id", required = false) Long iddelete,
			@ModelAttribute("fdelete") @Valid traiCay f2, BindingResult result, Model model) {
		if (result.hasErrors()) {
			f2.setId(iddelete);
			return "deletefruit";
		}
		model.addAttribute("fdelete", traicayRepo.findById(f2.getId()));
		traicayRepo.editcheckid(f2.getId());
		return "redirect:/fruit";
	}

}
