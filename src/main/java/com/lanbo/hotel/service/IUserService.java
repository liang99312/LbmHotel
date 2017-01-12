package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.User;
import java.util.HashMap;
import java.util.List;

public interface IUserService {
	public User getUserById(int userId);
        public boolean deleteUserById(int userId);
        public boolean addUser(User user);
        public boolean updateUser(User user);
        public User getLoadUser(String loadName,String password);
        public int getSelectRows(HashMap map);
        public List<User> getSelectPage(HashMap map);
}
