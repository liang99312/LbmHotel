package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.YuDing;
import java.util.HashMap;
import java.util.List;

public interface IYuDingService {
	public YuDing getYuDingById(int yuDingId);
        public boolean deleteYuDingById(int yuDingId);
        public boolean addYuDing(YuDing yuDing);
        public boolean updateYuDing(YuDing yuDing);
        public boolean updateState(YuDing yuDing);
        public boolean checkYuDing(YuDing yuDing);
        public int getSelectRows(HashMap map);
        public List<YuDing> getSelectPage(HashMap map);
        public int selectRzJiBies(YuDing yuDing);
        public List<YuDing> getYuDingFromHao(HashMap map);
}
