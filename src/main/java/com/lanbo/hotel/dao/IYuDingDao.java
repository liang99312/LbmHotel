package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.FangJian;

public interface IYuDingDao extends IBaseDao{
    int updateState(FangJian record);
}