/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.util;

import java.util.Calendar;

/**
 *
 * @author DengFeng
 */
public class DataUtil {
    public static String qxString = "101;102;103;201;202;203;301;302";
    public static String baseQxString = "302";
    public static String defaultPassword = "123456";
    
    public static String getBianHao(){
        String result="";
        Calendar c = Calendar.getInstance();
        result += getString(c.get(Calendar.YEAR))+getString(c.get(Calendar.MONTH))+getString(c.get(Calendar.DATE))+getString(c.get(Calendar.HOUR))+getString(c.get(Calendar.MINUTE))+getString(c.get(Calendar.SECOND));
        return result;
    }
    
    public static String getString(int i){
        String s = String.valueOf(i);
        if(s.length() < 2){
            s = "0"+s;
        }
        return s;
    }
}
