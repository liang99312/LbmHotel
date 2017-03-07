package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.YuDing;
import java.util.HashMap;
import java.util.List;

public interface IYuDingDao extends IBaseDao{
    int updateState(YuDing record);
    int selectRzJiBies(YuDing record);
    List selectMyYuDing(HashMap map);
    List selectYuDingFromHao(HashMap map);
}