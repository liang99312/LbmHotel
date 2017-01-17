package com.lanbo.hotel.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

public class YuDing{
    private Integer id =-1;

    private String fjHao;
    
    private String keHu;
    
    private String zjHao;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date ydSj;
    
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date rzSj;
    
    private String state;
    
    private String fuzeRen;
    
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFjHao() {
        return fjHao;
    }

    public void setFjHao(String fjHao) {
        this.fjHao = fjHao;
    }

    public String getKeHu() {
        return keHu;
    }

    public void setKeHu(String keHu) {
        this.keHu = keHu;
    }

    public String getZjHao() {
        return zjHao;
    }

    public void setZjHao(String zjHao) {
        this.zjHao = zjHao;
    }

    public Date getYdSj() {
        return ydSj;
    }

    public void setYdSj(Date ydSj) {
        this.ydSj = ydSj;
    }

    public Date getRzSj() {
        return rzSj;
    }

    public void setRzSj(Date rzSj) {
        this.rzSj = rzSj;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getFuzeRen() {
        return fuzeRen;
    }

    public void setFuzeRen(String fuzeRen) {
        this.fuzeRen = fuzeRen;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    @Override
    public String toString() {
        return fjHao;
    }
    
}