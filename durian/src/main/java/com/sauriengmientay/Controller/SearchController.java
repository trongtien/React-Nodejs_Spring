package com.sauriengmientay.Controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.Entity.Category;
import com.sauriengmientay.Entity.Fruit;
import com.sauriengmientay.Entity.Order;
import com.sauriengmientay.Entity.User;
import com.sauriengmientay.Repository.CategoryRepository;
import com.sauriengmientay.Repository.FruitRepository;
import com.sauriengmientay.Repository.OrderRepository;
import com.sauriengmientay.Repository.UserRepository;

@Controller
@RequestMapping("/search")
public class SearchController {
	@Autowired
	private FruitRepository fruitRepo;
	@Autowired
	private CategoryRepository catRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private OrderRepository orderRepo;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ModelAndView search(@RequestParam String catForSearch, @RequestParam String searchText) {
		ModelAndView mv = new ModelAndView();
		if (catForSearch.equals("user")) {
			Set<User> users = new HashSet<User>();
			User u = userRepo.findByUsername(searchText);
			if (u != null) {
				users.add(u);
			}
			List<User> fullnames = userRepo.searchByFullname(searchText);
			if (fullnames != null) {
				users.addAll(fullnames);
			}
			List<User> phones = userRepo.searchByPhone(searchText);
			if (phones != null) {
				users.addAll(phones);
			}
			List<User> emails = userRepo.searchByEmail(searchText);
			if (emails != null) {
				users.addAll(emails);
			}
			mv.addObject("users", users);
			mv.setViewName("userList");
		}  else if (catForSearch.equals("category")) {
			List<Category> cats = catRepo.findByName(searchText);
			mv.addObject("cats", cats);
			mv.setViewName("categoryList");
		} else if (catForSearch.equals("fruit")) {
			Set<Fruit> pros = new HashSet<Fruit>();
			List<Fruit> names = fruitRepo.findByName(searchText);
			List<Fruit> catNames = fruitRepo.findByCategoryName(searchText);
			if (names != null) {
				pros.addAll(names);
			}
			if (catNames != null) {
				pros.addAll(catNames);
			}
			mv.addObject("pros", pros);
			mv.setViewName("productList");
		} else if (catForSearch.equals("order")) {
			try {
				Long id = Long.parseLong(searchText);
				Order order = orderRepo.findById(id).get();
				mv.addObject("order", order);
			} catch (Exception e) {
				mv.addObject("order", null);
			}
			mv.setViewName("orderDetail");
		} else {
			mv.setViewName("admin404");
		}
		return mv;
	}
}
