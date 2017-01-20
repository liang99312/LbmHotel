package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.FangJian;
import java.util.HashMap;
import java.util.List;

public interface IFangJianDao extends IBaseDao{
    int updateState(FangJian record);
    int selectHaos(FangJian record);
    int selectJiBies(FangJian record);
    List selectAllFangJianHao(HashMap map);
}