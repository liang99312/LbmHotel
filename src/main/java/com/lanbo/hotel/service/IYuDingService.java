package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.YuDing;
import java.util.HashMap;
import java.util.List;

public interface IYuDingService {
	public YuDing getYuDingById(int fangJianId);
        public boolean deleteYuDingById(int fangJianId);
        public boolean addYuDing(YuDing fangJian);
        public boolean updateYuDing(YuDing fangJian);
        public int getSelectRows(HashMap map);
        public List<YuDing> getSelectPage(HashMap map);
}
