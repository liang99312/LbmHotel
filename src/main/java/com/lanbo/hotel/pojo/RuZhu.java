package com.lanbo.hotel.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

public class RuZhu{
    private Integer id =-1;
    
    private Integer keHu_id;
    
    private String keHu;
    
    private String bianHao;
    
    private String yuDing;
    
    private String fjHao;

    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date jzSj;
    
    @DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss",timezone = "GMT+8")
    private Date rzSj;
    
    private Integer rzTs = 0;
    
    private String name;
    
    private String sex;
    
    private String sfzHao;
    
    private String dianHua;
    
    private Integer fangJian_id;
    
    private String fangXing;
    
    private Float jiaGe;
    
    private Float jinE;
    
    private String state;
    
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
    
    public Date getRzSj() {
        return rzSj;
    }

    public void setRzSj(Date rzSj) {
        this.rzSj = rzSj;
    }

    public Integer getRzTs() {
        return rzTs;
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

    public String getBianHao() {
        return bianHao;
    }

    public void setBianHao(String bianHao) {
        this.bianHao = bianHao;
    }

    public String getYuDing() {
        return yuDing;
    }

    public void setYuDing(String yuDing) {
        this.yuDing = yuDing;
    }

    public String getFjHao() {
        return fjHao;
    }

    public void setFjHao(String fjHao) {
        this.fjHao = fjHao;
    }

    public Date getJzSj() {
        return jzSj;
    }

    public void setJzSj(Date jzSj) {
        this.jzSj = jzSj;
    }

    public Float getJinE() {
        return jinE;
    }

    public void setJinE(Float jinE) {
        this.jinE = jinE;
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

    public Integer getFangJian_id() {
        return fangJian_id;
    }

    public void setFangJian_id(Integer fangJian_id) {
        this.fangJian_id = fangJian_id;
    }

}