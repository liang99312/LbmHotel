/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.Page;
import com.lanbo.hotel.pojo.FangXing;
import com.lanbo.hotel.service.IFangXingService;
import com.lanbo.hotel.util.FileUtil;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author DengFeng
 */
@Controller
@RequestMapping("fangXing")
public class FangXingController {
    
    @Resource
    private IFangXingService fangXingService;
    
    @RequestMapping("/fangXing")
    public String goFangXing(HttpServletRequest request, HttpServletResponse response) {
        return "fangxing/fangXing";
    }
    
    @RequestMapping(value = "/addFangXing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> addFangXing(@RequestBody FangXing model,@RequestParam MultipartFile[] files,
            HttpServletRequest request) {
        model.setId(-1);
        Map<String, Object> map = new HashMap();
        if(this.fangXingService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该房型号已存在，请重新输入");
            return map;
        }
        String zhuTu = "";
        String tuPian = "";
        for (int i = 0; i < files.length; i++) {
            MultipartFile f = files[i];
            String suffix = f.getOriginalFilename().substring(f.getOriginalFilename().lastIndexOf("."));
            long now = System.currentTimeMillis();
            String fileName = String.valueOf(now) + suffix;
            String path = request.getSession().getServletContext().getRealPath("/") + "files/" + fileName;
            if (i == 0) {
                zhuTu = fileName;
            } else {
                tuPian = tuPian + tuPian + ";";
            }
            FileUtil.saveFile(f, path);
        }
        model.setZhuTu(zhuTu);
        model.setTuPian(tuPian);
        boolean result = this.fangXingService.addFangXing(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "写入数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/updateFangXing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> updateFangXing(@RequestBody FangXing model,@RequestParam MultipartFile[] files,
            HttpServletRequest request) {
        Map<String, Object> map = new HashMap();
        if(this.fangXingService.selectHaos(model)){
            map.put("result", false);
            map.put("msg", "该客户的预定已存在，请重新输入");
            return map;
        }
        String zhuTu = "";
        String tuPian = "";
        for (int i = 0; i < files.length; i++) {
            MultipartFile f = files[i];
            String suffix = f.getOriginalFilename().substring(f.getOriginalFilename().lastIndexOf("."));
            long now = System.currentTimeMillis();
            String fileName = String.valueOf(now) + suffix;
            String path = request.getSession().getServletContext().getRealPath("/") + "files/" + fileName;
            if (i == 0) {
                zhuTu = fileName;
            } else {
                tuPian = tuPian + tuPian + ";";
            }
            FileUtil.saveFile(f, path);
        }
        model.setZhuTu(zhuTu);
        model.setTuPian(tuPian);
        boolean result = this.fangXingService.updateFangXing(model);
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
            map.put("msg", "修改数据库失败");
        }
        return map;
    }

    @RequestMapping(value = "/delFangXing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> delFangXing(@RequestBody FangXing model) {
        Map<String, Object> map = new HashMap();
        boolean result = this.fangXingService.deleteFangXingById(model.getId());
        if (result) {
            map.put("result", true);
        } else {
            map.put("result", false);
        }
        return map;
    }

    @RequestMapping(value = "/getFangXingPage", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Page getFangXingPage(@RequestBody Page model) {
        HashMap map = model.getParamters();
        if(map == null){
            map = new HashMap();
        }
        if (model.getRows() == 0) {
            model.setRows(this.fangXingService.getSelectRows(map));
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
        model.setList(this.fangXingService.getSelectPage(map));
        return model;
    }
    
    @RequestMapping(value = "/getAllFangXingHao", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getAllFangXingHao(@RequestBody HashMap model) {
        List result = this.fangXingService.getAllFangXingHao();
        Map<String, Object> map = new HashMap();
        map.put("result", true);
        map.put("list",result);
        return map;
    }
    
}
