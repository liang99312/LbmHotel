/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.Page;
import com.lanbo.hotel.pojo.YuDing;
import com.lanbo.hotel.service.IYuDingService;
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
@RequestMapping("yuDing")
public class YuDingController {
    
    @Resource
    private IYuDingService yuDingService;
    
    @RequestMapping("/yuDing")
    public String goYuDing(HttpServletRequest request, HttpServletResponse response) {
        return "yuding/yuDing";
    }
    
    @RequestMapping(value = "/addYuDing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addYuDing(@RequestBody YuDing model) {
        model.setId(-1);
        Map<String, Object> map = new HashMap();
        boolean result = this.yuDingService.addYuDing(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "写入数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/updateYuDing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateYuDing(@RequestBody YuDing model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.yuDingService.updateYuDing(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }
    
    @RequestMapping(value = "/checkYuDing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> checkYuDing(@RequestBody YuDing model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.yuDingService.checkYuDing(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/delYuDing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delYuDing(@RequestBody YuDing model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.yuDingService.deleteYuDingById(model.getId());
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getYuDingPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getYuDingPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.yuDingService.getSelectRows(map));
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
        model.setList(this.yuDingService.getSelectPage(map));
        return model;
    }
    
}
