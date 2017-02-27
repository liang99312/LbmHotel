package com.lanbo.hotel.pojo;

public class FangJian{
    private Integer id =-1;

    private String fjHao;
    
    private String luoCeng;
    
    private String jiBie;
    
    private Float jiaGe;

    private String fuzeRen;
    
    private String state;
    
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

    public String getLuoCeng() {
        return luoCeng;
    }

    public void setLuoCeng(String luoCeng) {
        this.luoCeng = luoCeng;
    }

    public String getFuzeRen() {
        return fuzeRen;
    }

    public void setFuzeRen(String fuzeRen) {
        this.fuzeRen = fuzeRen;
    }

    public String getJiBie() {
        return jiBie;
    }

    public void setJiBie(String jiBie) {
        this.jiBie = jiBie;
    }

    public Float getJiaGe() {
        return jiaGe;
    }
    
    public void setJiaGe(Float jiaGe) {
        this.jiaGe = jiaGe;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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