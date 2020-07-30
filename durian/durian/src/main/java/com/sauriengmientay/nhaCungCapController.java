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
public class nhaCungCapController {

	@Autowired
	private nhaCungCapRepository nccRepo;
	@GetMapping(value="/supplier")
	public String listncc(Model model) {		
		model.addAttribute("NCC", nccRepo.listsupplier());
		return "supplier";
	}
	
	@GetMapping("/addsupplier")
	public String addget(Model model) {
		model.addAttribute("addsupplier", new nhaCungCap());	
		return "addsupplier";
	}
	
	@PostMapping("/addsupplier")
	public String addpost(@ModelAttribute("addsupplier") @Valid nhaCungCap newnhacungcap, Model model, BindingResult result) {
		nccRepo.save(newnhacungcap);
		model.addAttribute("addsupplier", nccRepo.findAll());
		return "redirect:/supplier";
	}
	
	
	@GetMapping("/editsupplier/{id}")
	public String edits(@PathVariable("id") Long idedit, Model model) {
		nhaCungCap s = new nhaCungCap();
		s = nccRepo.findById(idedit).orElseThrow(() -> new IllegalArgumentException("Khong co Id :" + idedit));
		model.addAttribute("sedit", s);
		
		return "editsupplier";
	}
	@PostMapping("editsupplier/{id}")
	public String editposts(@PathVariable("id") Long idedit, @Valid nhaCungCap s1, BindingResult result, Model model) {
		if (result.hasErrors()) {
			s1.setId(idedit);
			return "editsupplier";
		}
		model.addAttribute("sedit", nccRepo.findById(idedit));
		nccRepo.save(s1);
		
		return "redirect:/supplier";
	}
	
	@GetMapping("/deletesupplier/{id}")
	public String xoaget(@PathVariable("id") Long iddelete, Model model) {
		nhaCungCap s = new nhaCungCap();
		s = nccRepo.findById(iddelete).orElseThrow(() -> new IllegalArgumentException("Khong co Id :" + iddelete));
		model.addAttribute("sdelete",s);
		return "deletesupplier";
	}

	@PostMapping("/deletesupplier/{id}")
	public String xoapost(@RequestParam(value="id",required=false) Long iddelete,@ModelAttribute("sdelete") @Valid nhaCungCap s2, BindingResult result, Model model) {
		if (result.hasErrors()) {
			s2.setId(iddelete);
			return "deletesupplier";
		}
		model.addAttribute("sdelete",nccRepo.findById(s2.getId()));
		nccRepo.editcheckid(s2.getId());
		return "redirect:/supplier";
	}

}
