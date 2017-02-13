package com.lanbo.hotel.pojo;

public class KeHu{
    private Integer id =-1;

    private String bianHao;
    
    private String name;
    
    private String sex;
    
    private Integer age;

    private String sfzHao;
    
    private String dianHua;
    
    private String dengJi;
    
    private String password;
    
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBianHao() {
        return bianHao;
    }

    public void setBianHao(String bianHao) {
        this.bianHao = bianHao;
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

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
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

    public String getDengJi() {
        return dengJi;
    }

    public void setDengJi(String dengJi) {
        this.dengJi = dengJi;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
    
    @Override
    public String toString() {
        return name;
    }
    
}