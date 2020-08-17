package com.sauriengmientay.Controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.Entity.Permission;
import com.sauriengmientay.Entity.User;
import com.sauriengmientay.Repository.PermissionRepository;
import com.sauriengmientay.Repository.UserRepository;

@Controller
@RequestMapping("/staff")
public class UserController {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private PermissionRepository perRepo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@RequestMapping(value="", method= RequestMethod.GET)
	public ModelAndView showAll(@RequestParam(required=false) String loc, HttpServletRequest request) {
		if (loc==null||loc.isEmpty()) {
			loc="All";
		}
		if (!loc.equals("All")&&!loc.equals("CUSTOMER")&&!loc.equals("STAFF")&&!loc.equals("ADMIN")) {
			loc="All";
		}
		ModelAndView mv = new ModelAndView();
		mv.setViewName("userList");
		List<User> users = new ArrayList<>();
		if(loc.equals("All")) {
			users=userRepo.findAll();
		}
		else {
			Permission per = perRepo.findByPermissionName(loc).get(0);
			for (User u : userRepo.findAll()) {
				if(u.getPermissions().contains(per)) {
					users.add(u);
				}
			}
		}
		mv.addObject("users", users);
		mv.addObject("loc", loc);
		return mv;
	}
	
	@RequestMapping(value="/changeStatus", method= RequestMethod.GET)
	public String changeStatus(@RequestParam Long userId ) {
		User user = userRepo.findById(userId).get();
		user.setStatus(!user.isStatus());
		userRepo.save(user);
		return "redirect:/staff";
	}
	
	@RequestMapping(value="/editUser", method= RequestMethod.GET)
	public ModelAndView viewEditUser(@RequestParam Long userId , @RequestParam(required=false) String message) {
		ModelAndView mv = new ModelAndView();
		User user = userRepo.findById(userId).get();
		mv.addObject("user", user);
		mv.addObject("message", message);
		mv.addObject("pers", perRepo.findAll());
		mv.setViewName("editUser");
		return mv;
	}
	
	@RequestMapping(value="/editUser", method= RequestMethod.POST)
	public String editUser(@RequestParam Long userId, 
								@RequestParam String username,
								@RequestParam String email,
								@RequestParam String phone,
								@RequestParam String fullname,
								@RequestParam String address,
								@RequestParam Long perId,
								HttpServletRequest request
		) {
		User user = userRepo.findById(userId).get();
		if (!user.getUsername().equals(username)&&userRepo.findByUsername(username)!=null) {
			return "redirect:/staff/editUser?userId="+userId+"&message=Username is used!";
		}
		if (!user.getPhone().equals(phone)&&userRepo.findByPhone(phone)!=null) {
			return "redirect:/staff/editUser?userId="+userId+"&message=Phone is used!";
		}
		if (!user.getEmail().equals(email)&&userRepo.findByEmail(email)!=null) {
			return "redirect:/staff/editUser?userId="+userId+"&message=Email is used!";
		}
		user.setUsername(username);
		user.setFullname(fullname);
		user.setEmail(email);
		user.setPhone(phone);
		user.setNgayupdate(new Date());
		user.setAddress(address);
		Set<Permission> pers = new HashSet<Permission>();
		pers.add(perRepo.findById(perId).get());
		user.setPermissions(pers);
		userRepo.save(user);
		return "redirect:/staff/editUser?userId="+userId+"&message=Successfully!";
	}
	
	@RequestMapping(value="/createUser", method= RequestMethod.GET)
	public ModelAndView viewCreateUser(@RequestParam(required=false) String message) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("createUser");
		mv.addObject("pers", perRepo.findAll());
		mv.addObject("message", message);
		return mv;
	}
	
	@RequestMapping(value="/createUser", method= RequestMethod.POST)
	public ModelAndView createUser(@RequestParam String username,
								@RequestParam String email,
								@RequestParam String password,
								@RequestParam String phone,
								@RequestParam String fullname,
								@RequestParam String address,
								@RequestParam Long perId
		) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("createUser");
		User u = userRepo.findByUsername(username);
		if (u!=null) {
			mv.addObject("message", "Tên tài khoản đã sử dụng!");
			return mv;
		}
		u = userRepo.findByPhone(phone);
		mv.addObject("pers", perRepo.findAll());
		if (u!=null) {
			mv.addObject("message", "Số điện thoại đã sử dụng!");
			return mv;
		}
		u = userRepo.findByEmail(email);
		if (u!=null) {
			mv.addObject("message", "Email đã sử dụng!");
			return mv;
		}
		User user = new User();
		password = passwordEncoder.encode(password);
		user.setUsername(username);
		user.setImage("/resources/static/img/avatar/user.png");
		user.setPassword(password);
		user.setPhone(phone);
		user.setEmail(email);
		user.setNgaytao(new Date());
		user.setNgayupdate(new Date());
		user.setAddress(address);
		user.setFullname(fullname);
		user.setUsername(username);
		user.setFullname(fullname);
		user.setEmail(email);
		user.setPhone(phone);
		user.setNgayupdate(new Date());
		user.setAddress(address);
		Set<Permission> pers = user.getPermissions();
		Permission per = perRepo.findById(perId).get();
		pers.add(per);
		user.setPermissions(pers);
		userRepo.save(user);
		mv.addObject("message", "Tạo thành công!");
		return mv;
	}
}
