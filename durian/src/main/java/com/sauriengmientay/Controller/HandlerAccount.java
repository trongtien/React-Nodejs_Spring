package com.sauriengmientay.Controller;

import java.util.Date;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.Repository.PermissionRepository;
import com.sauriengmientay.Repository.UserRepository;
import com.sauriengmientay.Entity.Permission;
import com.sauriengmientay.Entity.User;

@Controller
public class HandlerAccount {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private PermissionRepository perRepo;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView login() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("login");
		return mv;
	}

	@RequestMapping(value = "/forgotPassword", method = RequestMethod.GET)
	public ModelAndView forgotPass() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("forgotPass");
		return mv;
	}

	@RequestMapping(value = "/changePassword", method = RequestMethod.POST)
	public ModelAndView changePass(@RequestParam String username, @RequestParam String email,
			@RequestParam String password) {
		ModelAndView mv = new ModelAndView();
		User user = userRepo.findByUsername(username);
		if (user == null) {
			mv.addObject("message", "Tên tài khoản hoặc Email đã sai!");
			mv.setViewName("forgotPass");
		} else if (user.getEmail().equals(email)) {
			password = passwordEncoder.encode(password);
			user.setPassword(password);
			userRepo.save(user);
			mv.setViewName("login");
		} else {
			mv.addObject("message", "Tên tài khoản hoặc Email đã sai!");
			mv.setViewName("forgotPass");
		}
		return mv;
	}

	@RequestMapping(value = "/changePass", method = RequestMethod.GET)
	public ModelAndView viewChangePass() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("changePass");
		return mv;
	}

	@RequestMapping(value = "/changePass", method = RequestMethod.POST)
	public ModelAndView changePassword(@RequestParam String oldPassword, @RequestParam String newPassword,
			HttpServletRequest request) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("changePass");
		HttpSession session = request.getSession();
		User u = (User) session.getAttribute("user");
		User user = userRepo.findById(u.getId()).get();
		if (passwordEncoder.matches(oldPassword, user.getPassword())) {
			user.setPassword(passwordEncoder.encode(newPassword));
			userRepo.save(user);
			mv.addObject("message", "Đổi mật khẩu thành công");
		} else {
			mv.addObject("message", "Đổi mật khẩu thất bại");
		}
		return mv;
	}

	@RequestMapping(value = "/accessDenied", method = RequestMethod.GET)
	public ModelAndView denied() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("accessDenied");
		return mv;
	}
}
