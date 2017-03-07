package com.lanbo.hotel.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

public class YuDing{
    private Integer id =-1;
    
    private Integer keHu_id;
    
    private String keHu;
    
    private String zjHao;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date ydSj;
    
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date rzSj;
    
    private Integer rzTs = 0;
    
    private Integer rzFjs = 0;
    
    private String name;
    
    private String sex;
    
    private String sfzHao;
    
    private String dianHua;
    
    private Integer fangXing_id;
    
    private String fangXing;
    
    private Float jiaGe;
    
    private String state;//未生效、已生效、已入住、已取消、已失效
    
    private String fuzeRen;
    
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Integer getRzTs() {
        return rzTs;
    }

    public Integer getRzFjs() {
        return rzFjs;
    }

    public void setRzFjs(Integer rzFjs) {
        this.rzFjs = rzFjs;
    }

    public void setRzTs(Integer rzTs) {
        this.rzTs = rzTs;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getSfzHao() {
        return sfzHao;
    }

    public void setSfzHao(String sfzHao) {
        this.sfzHao = sfzHao;
    }

    public String getDianHua() {
        return dianHua;
    }

    public void setDianHua(String dianHua) {
        this.dianHua = dianHua;
    }

    public String getFangXing() {
        return fangXing;
    }

    public void setFangXing(String fangXing) {
        this.fangXing = fangXing;
    }

    public Float getJiaGe() {
        return jiaGe;
    }

    public void setJiaGe(Float jiaGe) {
        this.jiaGe = jiaGe;
    }

    public Integer getKeHu_id() {
        return keHu_id;
    }

    public void setKeHu_id(Integer keHu_id) {
        this.keHu_id = keHu_id;
    }

    public Integer getFangXing_id() {
        return fangXing_id;
    }

    public void setFangXing_id(Integer fangXing_id) {
        this.fangXing_id = fangXing_id;
    }

}