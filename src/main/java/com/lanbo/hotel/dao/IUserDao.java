package com.lanbo.hotel.dao;

import com.lanbo.hotel.pojo.User;

public interface IUserDao extends IBaseDao{
    int insertSelective(User record);

    int updatePassword(User record);
    
    User selectByNameAndPassword(String loadName,String password);
    
}