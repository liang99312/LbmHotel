package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.User;

public interface IUserService {
	public User getUserById(int userId);
        public boolean deleteUserById(int userId);
        public boolean addUser(User user);
        public User getLoadUser(String loadName,String password);
}
