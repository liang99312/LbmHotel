package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.FangJian;

public interface IFangJianDao extends IBaseDao{
    int updateState(FangJian record);
    int selectHaos(FangJian record);
}