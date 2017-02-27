package com.lanbo.hotel.pojo;

/*
单人间： 一间面积为16~20平方米的房间，内有卫生间和其他附属设备组成。房内设一张单人床。

标准间：房内设两张单人床或一张双人床的叫标准间，这样的房间适合住两位客人和夫妻同住，适合旅游团体住用。

豪华间/高级间：房内设两张单人床或一张双人床，房间的装修，房内设施比标准间档次高，其价格也比标准间高一些。

商务间：房内设两张单人床或一张双人床，房内可以上网，满足商务客人的需求。

行政间：多为一张双人床，此类型房间单独为一楼层，并配有专用的商务中心，咖啡厅。

套间 ： 是由两间或两间以上的房间（内有卫生间和其他附属设施）组成。

双套间：一般是连通的两个房间。一间是会客室，一间是卧室。卧室内设两张单人床或一张双人床。这样的房间适合夫妻或旅游团住用。

组合套间：这是一种根据需要专门设计的房间，每个房间都有卫生间。有的由两个对门的房组成；有的由中间有门有锁的隔壁两个房间组成；也有的由相邻的各有卫生间的三个房间组成。

多套间：由三至五间或更多房间组成，有两个卧室各带卫生间还有会客室、餐厅、办公室及厨房等，卧室内设特大号双人床。

高级套间：由七至八间房组成的套间，走廊有小酒吧。两个卧室分开，男女卫生间分开，设有客厅、书房、会议室、随员室、警卫室、餐厅厨房设施，有的还有室内花园。

复式套间：由楼上、楼下两层组成，楼上为卧室，面积较小，设有两张单人床或一张双人床。楼下设有卫生间和会客室，室内有活动沙发，同时可以拉开当床。 
*/
public class FangXing{
    private Integer id =-1;

    private String fxHao;
    
    private String name;
    
    private Float jiaGe;

    private String zhuTu;
    
    private String tuPian;
    
    private String remark;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFxHao() {
        return fxHao;
    }

    public void setFxHao(String fxHao) {
        this.fxHao = fxHao;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getJiaGe() {
        return jiaGe;
    }

    public void setJiaGe(Float jiaGe) {
        this.jiaGe = jiaGe;
    }

    public String getZhuTu() {
        return zhuTu;
    }

    public void setZhuTu(String zhuTu) {
        this.zhuTu = zhuTu;
    }

    public String getTuPian() {
        return tuPian;
    }

    public void setTuPian(String tuPian) {
        this.tuPian = tuPian;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
    
    @Override
    public String toString() {
        return fxHao;
    }
    
}