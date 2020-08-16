package com.sauriengmientay.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.sauriengmientay.Embeded.OrderDetailIdentity;
import com.sauriengmientay.Entity.Fruit;
import com.sauriengmientay.Entity.Order;
import com.sauriengmientay.Entity.OrderDetail;
import com.sauriengmientay.Repository.FruitRepository;
import com.sauriengmientay.Repository.OrderDetailRepository;
import com.sauriengmientay.Repository.OrderRepository;

@Controller
@RequestMapping("/order")
public class OrderController {
	@Autowired
	private OrderRepository orderRepo;
	
	@Autowired
	private FruitRepository proRepo;
	
	@Autowired
	private OrderDetailRepository orderDetailRepo;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ModelAndView showAllOrder() {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("cusOrder");
		mv.addObject("orders", orderRepo.findAll());
		return mv;
	}
	
	@RequestMapping(value="/orderDetail", method=RequestMethod.GET)
	public ModelAndView viewOrderDetail(@RequestParam Long orderId) {
		ModelAndView mv = new ModelAndView();
		mv.setViewName("orderDetail");
		mv.addObject("order", orderRepo.findById(orderId).get());
		return mv;
	}
	
	@RequestMapping(value="/deleteProInOrder", method=RequestMethod.GET)
	public String deletePro(@RequestParam Long orderId, @RequestParam Long proId) {
		OrderDetailIdentity o = new OrderDetailIdentity();
		o.setFruitId(proId);
		o.setOrderId(orderId);
		orderDetailRepo.deleteById(o);
		return "redirect:/order/orderDetail?orderId="+orderId;
	}
	
	@RequestMapping(value="/editProInOrder", method=RequestMethod.POST)
	public String editPro(@RequestParam Long orderId, @RequestParam Long proId, @RequestParam Long qty) {
		OrderDetailIdentity o = new OrderDetailIdentity();
		o.setFruitId(proId);
		o.setOrderId(orderId);
		OrderDetail oDetail = orderDetailRepo.findById(o).get();
		oDetail.setQuantity(qty);
		orderDetailRepo.save(oDetail);
		return "redirect:/order/orderDetail?orderId="+orderId;
	}
	
	@RequestMapping(value="/changeOrder", method=RequestMethod.POST)
	public String changeOrder(@RequestParam Integer status, @RequestParam Long orderId) {
		Order order = orderRepo.findById(orderId).get();
		order.setStatus(status);
		orderRepo.save(order);
		for (OrderDetail o : order.getOrderDetails()) {
			Fruit f = o.getFruit();
			f.setQuantity(f.getQuantity()-o.getQuantity());
			proRepo.save(f);
		}
		return "redirect:/order";
	}
}
