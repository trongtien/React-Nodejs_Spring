package com.sauriengmientay.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.Repository.SupplierRepository;

@Controller
@RequestMapping("/supplier")
public class SupplierController {
	@Autowired
	private SupplierRepository supRepo;
	
	@RequestMapping(value="", method = RequestMethod.GET)
	public ModelAndView viewSupplier(
			@RequestParam Long supId
		) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("viewSupplier");
		mv.addObject("sup",supRepo.findById(supId).get());
		return mv;
	}
	
	@RequestMapping(value="selectOldSupplier", method = RequestMethod.GET)
	public ModelAndView selectSupplier(
			@RequestParam Long proId
		) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("selectSupplier");
		mv.addObject("sups",supRepo.findAll());
		mv.addObject("proId", proId);
		return mv;
	}
}
