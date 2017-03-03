package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.KeHu;
import java.util.List;

public interface IKeHuDao extends IBaseDao{
    int updateDengJi(KeHu record);
    int selectHaos(KeHu record);
    int updatePassword(KeHu record);
    KeHu selectByNameAndPassword(String loadName,String password);
    List selectAllKeHu();
}