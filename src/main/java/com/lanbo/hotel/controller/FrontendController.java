/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import com.lanbo.hotel.pojo.FangXing;
import com.lanbo.hotel.pojo.KeHu;
import com.lanbo.hotel.service.IFangXingService;
import com.lanbo.hotel.service.IKeHuService;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
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
@RequestMapping("frontend")
public class FrontendController {
    
    @Resource
    private IFangXingService fangXingService;
    
    @Resource
    private IKeHuService keHuService;    
    
    @RequestMapping("/goIndex")
    public void goIndex(HttpServletRequest request, HttpServletResponse response) {
        PrintWriter out = null;
        try {
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
            Logger.getLogger(FrontendController.class.getName()).log(Level.SEVERE, null, ex);
        } finally {
            out.close();
        }
    }
    
    @RequestMapping("/goYuLan")
    public String goYuLan(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/yuLan";
    }
    
    @RequestMapping("/goZhuCe")
    public String goZhuCe(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/zhuCe";
    }
    
    @RequestMapping("/goTop")
    public String goTop(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/top";
    }
    
    @RequestMapping("/goBottom")
    public String goBottom(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/bottom";
    }
    
    @RequestMapping("/goMine")
    public String goMine(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/mine";
    }
    
    @RequestMapping("/goDetail")
    public String goDetail(HttpServletRequest request, HttpServletResponse response) {
        return "frontend/detail";
    }
    
    @RequestMapping(value = "/getAllFangXing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getAllFangXing() {
        List result = this.fangXingService.getAllFangXing();
        Map<String, Object> map = new HashMap();
        map.put("result", true);
        map.put("list", result);
        return map;
    }
    
    @RequestMapping(value = "/getFangXing", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> getFangXing(@RequestBody FangXing model) {
        Object obj = this.fangXingService.getFangXingById(model.getId());
        Map<String, Object> map = new HashMap();
        map.put("result", true);
        map.put("obj", obj);
        return map;
    }
        
    @RequestMapping(value = "/load", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> load(@RequestBody KeHu model, HttpServletRequest request,
            HttpServletResponse response) {
        KeHu kh = this.keHuService.getLoadKeHu(model.getName(), model.getPassword());
        Map<String, Object> map = new HashMap();
        if (kh == null) {
            map.put("result", -1);
            request.getSession().setAttribute("kehu", null);
        } else {
            request.getSession().setAttribute("kehu", kh);
            map.put("result", 1);
        }
        return map;
    }
    
    @RequestMapping(value = "/changePassword", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> changePassword(@RequestBody KeHu model, HttpServletRequest request,
            HttpServletResponse response) {
        KeHu kh = this.keHuService.getLoadKeHu(model.getName(), model.getRemark());
        Map<String, Object> map = new HashMap();
        if (kh == null) {
            map.put("result", false);
            map.put("msg","原密码输入有误");
        } else {
            kh.setPassword(model.getPassword());
            boolean result = this.keHuService.updatePassword(kh);
            if(!result){
                map.put("result", false);
                map.put("msg", "修改数据库失败");
            }else
                map.put("result", true);
        }
        return map;
    }
    
    @RequestMapping(value = "/getLordKeHu", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public KeHu getLordKeHu(HttpServletRequest request,
            HttpServletResponse response) {
        KeHu kh = (KeHu) request.getSession().getAttribute("kehu");
        return kh;
    }
    
    @RequestMapping(value = "/zhuCe", method = RequestMethod.POST, produces = "application/json;charset=UTF-8")
    @ResponseBody
    public Map<String, Object> zhuCe(@RequestBody KeHu model) {
        model.setId(-1);
        model.setDengJi("初级");
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
            map.put("msg", "注册失败");
        }
        return map;
    }
}
