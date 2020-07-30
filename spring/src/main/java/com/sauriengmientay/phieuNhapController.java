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
public class phieuNhapController {

	@Autowired traiCayRepository traicayRepo;
	@Autowired nhaCungCapRepository nccRepo;
	@Autowired phieuNhapRepository pnRepo;
	
	@GetMapping(value="/storage")
	public String list(Model model) {
		model.addAttribute("TC", traicayRepo.findAll());
		return "storage";
	}
	@GetMapping("/nhaphang")
	public String AddCourse ( Model model) {
		model.addAttribute("TC", traicayRepo.findAll());
		model.addAttribute("NCC", nccRepo.findAll());
		model.addAttribute("nhaphang",new phieuNhap());
		return "nhaphang";
	}
	@PostMapping("/nhaphang")
	public String studentsAddCourse(@ModelAttribute("nhaphang") @Valid phieuNhap newphieunhap, Model model, BindingResult result) {
		pnRepo.updateSl(newphieunhap.getSo_luong(), newphieunhap.getTraicay().getId());
		pnRepo.save(newphieunhap);
		model.addAttribute("nhaphang", pnRepo.findAll());
		return "redirect:/storage";
	}
}
