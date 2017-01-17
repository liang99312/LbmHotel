package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.YuDing;

public interface IYuDingDao extends IBaseDao{
    int updateState(YuDing record);
}