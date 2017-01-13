package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.Page;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.lanbo.hotel.pojo.User;
import com.lanbo.hotel.service.IUserService;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("user")
public class UserController {

    @Resource
    private IUserService userService;

    @RequestMapping(value = "/addUser", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addUser(@RequestBody User model) {
        model.setPassword("123456");
        boolean result = this.userService.addUser(model);
        Map<String, Object> map = new HashMap();
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/updateUser", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateUser(@RequestBody User model) {
        boolean result = this.userService.updateUser(model);
        Map<String, Object> map = new HashMap();
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/delUser", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delUser(@RequestBody User model) {
        boolean result = this.userService.deleteUserById(model.getId());
        Map<String, Object> map = new HashMap();
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getUsers", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getUsers(@RequestBody User model) {
        boolean result = this.userService.deleteUserById(model.getId());
        Map<String, Object> map = new HashMap();
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getUserPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getUserPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.userService.getSelectRows(map));
        }
        if (model.getRows() == 0) {
            model.setCurrentPage(1);
            model.setList(new ArrayList());
            model.setParamters(new HashMap());
            model.setRows(0);
            model.setTotalPage(0);
            return model;
        }
        if (model.getTotalPage() == 0) {
            model.setTotalPage(model.getTotalPage());
        }
        map.put("beginRow", model.getBegin());
        map.put("pageSize", model.getPageSize());
        model.setList(this.userService.getSelectPage(map));
        return model;
    }

    @RequestMapping(value = "/getLordUser", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public User getLordUser(HttpServletRequest request,
            HttpServletResponse response) {
        User user = (User) request.getSession().getAttribute("user");
        return user;
    }

    @RequestMapping(value = "/loadUser", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> loadUser(@RequestBody User model, HttpServletRequest request,
            HttpServletResponse response) {
        User user = this.userService.getLoadUser(model.getLoadName(), model.getPassword());
        Map<String, Object> map = new HashMap();
        if (user == null) {
            map.put("result", -1);
            request.getSession().setAttribute("user", null);
        } else {
            request.getSession().setAttribute("user", user);
            map.put("result", 1);
        }
        return map;
    }

    @RequestMapping("/home")
    public String goHome(HttpServletRequest request, Model model) {
        return "home/home";
    }

    @RequestMapping("/user")
    public String goUser(HttpServletRequest request, Model model) {
        return "user/user";
    }

    @RequestMapping("/loadOut")
    public void loadOut(HttpServletRequest request, HttpServletResponse response) {
        PrintWriter out = null;
        try {
            request.getSession().removeAttribute("user");
            out = response.getWriter();
            String loginPage = request.getContextPath() + "/index.jsp";
            StringBuilder builder = new StringBuilder();
            builder.append("<script type=\"text/javascript\">");
            builder.append("window.top.location.href='");
            builder.append(loginPage);
            builder.append("';");
            builder.append("</script>");
            out.print(builder.toString());
        } catch (IOException ex) {
            Logger.getLogger(UserController.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            out.close();
        }
    }
}
