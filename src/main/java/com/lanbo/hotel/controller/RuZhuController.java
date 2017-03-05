/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.Page;
import com.lanbo.hotel.pojo.User;
import com.lanbo.hotel.pojo.RuZhu;
import com.lanbo.hotel.service.IRuZhuService;
import com.lanbo.hotel.util.DataUtil;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author DengFeng
 */
@Controller
@RequestMapping("ruZhu")
public class RuZhuController {
    
    @Resource
    private IRuZhuService ruZhuService;
    
    @RequestMapping("/ruZhu")
    public String goRuZhu(HttpServletRequest request, HttpServletResponse response) {
        return "yuding/ruZhu";
    }
    
    @RequestMapping(value = "/addRuZhu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addRuZhu(@RequestBody RuZhu model) {
        model.setId(-1);
        model.setBianHao(DataUtil.getBianHao());
        Map<String, Object> map = new HashMap();
        boolean result = this.ruZhuService.addRuZhu(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "写入数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/updateRuZhu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateRuZhu(@RequestBody RuZhu model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.ruZhuService.updateRuZhu(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }
    
    @RequestMapping(value = "/checkRuZhu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> checkRuZhu(@RequestBody RuZhu model,HttpServletRequest request,
            HttpServletResponse response) {
        Map<String, Object> map = new HashMap();
        User user = (User) request.getSession().getAttribute("user");
        model.setFuzeRen(user.getUserName());
        boolean result = this.ruZhuService.checkRuZhu(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/delRuZhu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delRuZhu(@RequestBody RuZhu model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.ruZhuService.deleteRuZhuById(model.getId());
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getRuZhuPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getRuZhuPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.ruZhuService.getSelectRows(map));
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
        model.setList(this.ruZhuService.getSelectPage(map));
        return model;
    }
    
}
