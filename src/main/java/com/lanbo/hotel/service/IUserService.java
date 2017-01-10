package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.User;

public interface IUserService {
	public User getUserById(int userId);
        public boolean deleteUserById(int userId);
}
