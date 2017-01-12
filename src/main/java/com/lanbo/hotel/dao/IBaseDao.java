package com.lanbo.hotel.dao;

import java.util.HashMap;
import java.util.List;

public interface IBaseDao {
    int insert(Object record);
    
    int deleteById(Integer id);
    
    int updateById(Object record);
    
    Object selectById(Integer id);
    
    int selectRows(HashMap map);
    
    List selectByPage(HashMap map);
}