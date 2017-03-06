package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.RuZhu;

public interface IRuZhuDao extends IBaseDao{
    int updateState(RuZhu record);
    int jieZhang(RuZhu record);
}