/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.Page;
import com.lanbo.hotel.pojo.FangJian;
import com.lanbo.hotel.service.IFangJianService;
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
@RequestMapping("fangJian")
public class FangJianController {
    
    @Resource
    private IFangJianService fangJianService;
    
    @RequestMapping("/fangJian")
    public String goFangJian(HttpServletRequest request, HttpServletResponse response) {
        return "fangjian/fangJian";
    }
    
    @RequestMapping(value = "/addFangJian", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addFangJian(@RequestBody FangJian model) {
        model.setId(-1);
        Map<String, Object> map = new HashMap();
        if(this.fangJianService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该房间号已存在，请重新输入");
            return map;
        }
        boolean result = this.fangJianService.addFangJian(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "写入数据库失败");
        }
        return map;
    }
    
    @RequestMapping(value = "/updateFangJian", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateFangJian(@RequestBody FangJian model) {
        Map<String, Object> map = new HashMap();
        if(this.fangJianService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该客户的预订已存在，请重新输入");
            return map;
        }
        boolean result = this.fangJianService.updateFangJian(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/updateState", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateState(@RequestBody FangJian model) {
        Map<String, Object> map = new HashMap();
        if(this.fangJianService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该客户的预订已存在，请重新输入");
            return map;
        }
        boolean result = this.fangJianService.updateState(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/delFangJian", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delFangJian(@RequestBody FangJian model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.fangJianService.deleteFangJianById(model.getId());
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getFangJianPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getFangJianPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.fangJianService.getSelectRows(map));
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
        model.setList(this.fangJianService.getSelectPage(map));
        return model;
    }
    
    @RequestMapping(value = "/getAllFangJian", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getAllFangJian(@RequestBody HashMap model) {
        System.out.println(model);
        List<String> stateList = new ArrayList<String>();
        stateList.add("就绪");
        stateList.add("已住客");
        stateList.add("未准备");
        if(model.get("state") == null || !stateList.contains(model.get("state").toString())){
            model.remove("state");
            model.put("state", null);
        }
        List result = this.fangJianService.getAllFangJian(model);
        Map<String, Object> map = new HashMap();
        map.put("result", true);
        map.put("list",result);
        return map;
    }
    
}
