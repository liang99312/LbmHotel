/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.lanbo.hotel.pojo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class Page {

// 用户输入的分页条件
    private int currentPage = 1; // 当前页
    
    private int pageSize = 15; // 每页最大行数
// 用于实现分页SQL的条件，是根据用户输入条件计算而来的
    private int begin = 0;
    
    private int end = 0;
// 自动计算出的总行数
    private int rows = 0;
// 根据总行数计算总页数，然后将总页数输出给页面
    private int totalPage = 0;
    
    private List list = new ArrayList();
    
    private HashMap paramters = null;

    public int getRows() {
        return rows;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }

    public int getTotalPage() {
// 根据总行数，计算总页数
        if (rows % pageSize == 0) {
            totalPage = rows / pageSize;
        } else {
            totalPage = rows / pageSize + 1;
        }
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public int getBegin() {
// 在mapper.xml使用begin属性时，对其进行计算
        begin = (currentPage - 1) * pageSize;
        return begin;
    }

    public void setBegin(int begin) {
        this.begin = begin;
    }

    public int getEnd() {
// 在mapper.xml使用end属性时，对其进行计算
        end = currentPage * pageSize + 1;
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public List getList() {
        return list;
    }

    public void setList(List list) {
        this.list = list;
    }

    public HashMap getParamters() {
        return paramters;
    }

    public void setParamters(HashMap paramters) {
        this.paramters = paramters;
    }
    
}
