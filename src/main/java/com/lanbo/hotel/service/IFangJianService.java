package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.FangJian;
import java.util.HashMap;
import java.util.List;

public interface IFangJianService {
	public FangJian getFangJianById(int fangJianId);
        public boolean deleteFangJianById(int fangJianId);
        public boolean addFangJian(FangJian fangJian);
        public boolean updateFangJian(FangJian fangJian);
        public int getSelectRows(HashMap map);
        public List<FangJian> getSelectPage(HashMap map);
        public boolean selectHaos(FangJian fangJian);
        public List getAllFangJian(HashMap map);
}
