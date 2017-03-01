package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.FangXing;
import java.util.List;


public interface IFangXingDao extends IBaseDao{
    int selectHaos(FangXing record);
    List selectAllFangXingHao();
    List selectAllFangXing();
}