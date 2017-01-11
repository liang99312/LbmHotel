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
@RequestMapping("ruzhu")
public class RuZhuController {
    
    @RequestMapping("/ruZhu")
    public String goRuZhu(HttpServletRequest request, HttpServletResponse response) {
        return "ruzhu/ruZhu";
    }
}
