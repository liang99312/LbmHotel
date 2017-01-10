package com.lanbo.hotel.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanbo.hotel.pojo.User;
import com.lanbo.hotel.service.IUserService;

@Controller
@RequestMapping("user")
public class UserController {
	@Resource
	private IUserService userService;
	
	@RequestMapping("/showUser")
	public String toIndex(HttpServletRequest request,Model model){
		int userId = Integer.parseInt(request.getParameter("id"));
                System.out.println("id=" + userId);
		User user = this.userService.getUserById(userId);
                System.out.println("user=" + user.toString());
		model.addAttribute("user", user);
		return "showUser";
	}
}
