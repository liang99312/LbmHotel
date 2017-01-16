package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.User;
import java.util.HashMap;
import java.util.List;

public interface IUserDao extends IBaseDao{
    int insertSelective(User record);

    int updatePassword(User record);
    
    int selectLoadNames(User record);
    
    User selectByNameAndPassword(String loadName,String password);
    
    List selectAllUserName(HashMap map);
    
}