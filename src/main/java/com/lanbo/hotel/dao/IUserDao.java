package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.User;

public interface IUserDao extends IBaseDao{
    int insertSelective(User record);

    int updatePassword(User record);
    
    int selectLoadNames(User record);
    
    User selectByNameAndPassword(String loadName,String password);
    
}