/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author DengFeng
 */
@Controller
@RequestMapping("jieZhang")
public class JieZhangController {
    
    @RequestMapping("/jieZhang")
    public String goJieZhang(HttpServletRequest request, HttpServletResponse response) {
        return "jiezhang/jieZhang";
    }
}
