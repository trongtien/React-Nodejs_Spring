package com.sauriengmientay.Controller;

import java.util.Collections;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.PhieuNhapByDate;
import com.sauriengmientay.Entity.Fruit;
import com.sauriengmientay.Entity.PhieuNhap;
import com.sauriengmientay.Entity.Supplier;
import com.sauriengmientay.Repository.CategoryRepository;
import com.sauriengmientay.Repository.FruitRepository;
import com.sauriengmientay.Repository.SupplierRepository;
import com.sauriengmientay.Service.ImageService;

@Controller
@RequestMapping("/fruit")
public class FruitController {
	@Autowired
	private FruitRepository fruitRepo;
	@Autowired
	private CategoryRepository catRepo;
	@Autowired
	private SupplierRepository supRepo;
	@Autowired
	private ImageService imgService;

	String uploadRootPath = System.getProperty("user.dir") + "/src/main/webapp/resources/static/img";

	@RequestMapping(value = "", method = RequestMethod.GET)
	public ModelAndView listPro() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("productList");
		mv.addObject("pros", fruitRepo.findActiveFruit());
		return mv;
	}

	@RequestMapping(value = "/trash", method = RequestMethod.GET)
	public ModelAndView trashPro() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("trash");
		mv.addObject("pros", fruitRepo.findDeletedFruit());
		return mv;
	}

	@RequestMapping(value = "/addPro", method = RequestMethod.GET)
	public ModelAndView viewAddPro() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("addPro");
		mv.addObject("cats", catRepo.findAll());
		return mv;
	}

	@RequestMapping(value = "/addPro", method = RequestMethod.POST)
	public String addPro(@RequestParam String name, @RequestParam Long price, @RequestParam Long catId,
			@RequestParam Long discount, @RequestParam(required = false) MultipartFile file) {
		Fruit pro = new Fruit();
		pro.setName(name);
		pro.setCategory(catRepo.findById(catId).get());
		pro.setPrice(price);
		if (!file.isEmpty()) {
			String img = imgService.uploadFile(uploadRootPath + "/fruit", file);
			pro.setImage("/resources/static/img/fruit/" + img);
		}
		else {
			pro.setImage("/resources/static/img/default.png");
		}
		pro.setDiscount(discount);
		fruitRepo.save(pro);
		return "redirect:/fruit";
	}

	@RequestMapping(value = "/deleteFruit", method = RequestMethod.GET)
	public String deletePro(@RequestParam Long fruitId) {
		Fruit fruit = fruitRepo.findById(fruitId).get();
		fruit.setStatus(false);
		fruitRepo.save(fruit);
		return "redirect:/fruit";
	}

	@RequestMapping(value = "/deleteForeverFruit", method = RequestMethod.GET)
	public String deleteFPro(@RequestParam Long fruitId) {
		fruitRepo.deleteById(fruitId);
		return "redirect:/fruit/trash";
	}

	@RequestMapping(value = "/clearTrashFruit", method = RequestMethod.GET)
	public String clearTrashPro() {
		fruitRepo.deleteDeactiveFruit();
		return "redirect:/fruit/trash";
	}

	@RequestMapping(value = "/recoverFruit", method = RequestMethod.GET)
	public String recoverPro(@RequestParam Long fruitId) {
		Fruit fruit = fruitRepo.findById(fruitId).get();
		fruit.setStatus(true);
		fruitRepo.save(fruit);
		return "redirect:/fruit/trash";
	}

	@RequestMapping(value = "/editPro", method = RequestMethod.GET)
	public ModelAndView viewEditPro(@RequestParam Long fruitId) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("editPro");
		mv.addObject("pro", fruitRepo.findById(fruitId).get());
		mv.addObject("cats", catRepo.findAll());
		return mv;
	}

	@RequestMapping(value = "/editPro", method = RequestMethod.POST)
	public String addPro(@RequestParam Long fruitId, @RequestParam String name, @RequestParam Long price,
			@RequestParam Long catId, @RequestParam Long discount, @RequestParam(required = false) MultipartFile file) {
		Fruit pro = fruitRepo.findById(fruitId).get();
		pro.setName(name);
		pro.setCategory(catRepo.findById(catId).get());
		pro.setPrice(price);
		pro.setDiscount(discount);
		if (!file.isEmpty()) {
			String img = imgService.uploadFile(uploadRootPath + "/fruit", file);
			pro.setImage("/resources/static/img/fruit/" + img);
		}
		fruitRepo.save(pro);
		return "redirect:/fruit";
	}

	@RequestMapping(value = "/importFruit", method = RequestMethod.GET)
	public ModelAndView viewImportPro(@RequestParam Long fruitId, @RequestParam(required = false) Long supId) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("importPro");
		if (supId == null) {
			mv.addObject("sup", null);
		} else {
			mv.addObject("sup", supRepo.findById(supId).get());
		}
		mv.addObject("proId", fruitId);
		return mv;
	}

	@RequestMapping(value = "/importFruit", method = RequestMethod.POST)
	public String importPro(@RequestParam Long fruitId, @RequestParam Long qty, @RequestParam Long price,
			@RequestParam String name, @RequestParam String phone, @RequestParam String address,
			@RequestParam(required = false) Long supplierId) {
		Fruit fruit = fruitRepo.findById(fruitId).get();
		fruit.setQuantity(fruit.getQuantity() + qty);
		PhieuNhap pn = new PhieuNhap();
		pn.setQuantity(qty);
		pn.setVon(price * qty);
		pn.setDate(new Date());
		pn.setFruit(fruit);
		if (supplierId == null) {
			Supplier sup = new Supplier();
			sup.setName(name);
			sup.setPhone(phone);
			sup.setAddress(address);
			supRepo.save(sup);
			pn.setSupplier(sup);
		} else {
			Supplier sup = supRepo.findById(supplierId).get();
			pn.setSupplier(sup);
		}
		List<PhieuNhap> phieunhaps = fruit.getPhieuNhaps();
		phieunhaps.add(pn);
		fruitRepo.save(fruit);
		return "redirect:/fruit";
	}

	@RequestMapping(value = "/viewImportFruit", method = RequestMethod.GET)
	public ModelAndView viewImport(@RequestParam Long fruitId) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("viewImport");
		Fruit fruit = fruitRepo.findById(fruitId).get();
		List<PhieuNhap> pns = fruit.getPhieuNhaps();
		Collections.sort(pns, new PhieuNhapByDate());
		fruit.setPhieuNhaps(pns);
		mv.addObject("imports", fruit.getPhieuNhaps());
		return mv;
	}
}
