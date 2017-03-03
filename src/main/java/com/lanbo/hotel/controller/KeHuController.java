/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.KeHu;
import com.lanbo.hotel.pojo.Page;
import com.lanbo.hotel.service.IKeHuService;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
@RequestMapping("keHu")
public class KeHuController {
    
    @Resource
    private IKeHuService keHuService;
    
    @RequestMapping("/keHu")
    public String goKeHu(HttpServletRequest request, HttpServletResponse response) {
        return "kehu/keHu";
    }
    
    
    @RequestMapping(value = "/addKeHu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addKeHu(@RequestBody KeHu model) {
        model.setId(-1);
        Map<String, Object> map = new HashMap();
        if(this.keHuService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该用户名、身份证号、手机号已存在，请重新输入");
            return map;
        }
        boolean result = this.keHuService.addKeHu(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "写入数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/updateKeHu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateKeHu(@RequestBody KeHu model) {
        Map<String, Object> map = new HashMap();
        if(this.keHuService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该客户的预定已存在，请重新输入");
            return map;
        }
        boolean result = this.keHuService.updateKeHu(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/delKeHu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delKeHu(@RequestBody KeHu model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.keHuService.deleteKeHuById(model.getId());
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getKeHuPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getKeHuPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.keHuService.getSelectRows(map));
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
        model.setList(this.keHuService.getSelectPage(map));
        return model;
    }
    
    @RequestMapping(value = "/getAllKeHu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getAllKeHu() {
        List result = this.keHuService.getAllKeHu();
        Map<String, Object> map = new HashMap();
        map.put("result", true);
        map.put("list", result);
        return map;
    }
}
