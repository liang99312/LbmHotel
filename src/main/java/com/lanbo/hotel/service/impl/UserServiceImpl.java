package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IUserDao;
import com.lanbo.hotel.pojo.User;
import com.lanbo.hotel.service.IUserService;

@Service("userService")
public class UserServiceImpl implements IUserService {

    @Resource
    private IUserDao userDao;

    @Override
    public User getUserById(int userId) {
        // TODO Auto-generated method stub
        return this.userDao.selectByPrimaryKey(userId);
    }

    @Override
    public boolean deleteUserById(int userId) {
        return this.userDao.deleteByPrimaryKey(userId) == 1;
    }

    @Override
    public boolean addUser(User user) {
        return this.userDao.insert(user) == 1;
    }

    @Override
    public User getLoadUser(String loadName, String password) {
        return this.userDao.selectByNameAndPassword(loadName,password);
    }

}