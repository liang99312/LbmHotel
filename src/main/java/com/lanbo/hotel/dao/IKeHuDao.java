package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.KeHu;

public interface IKeHuDao extends IBaseDao{
    int updateDengJi(KeHu record);
    int selectHaos(KeHu record);
}