package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.FangXing;
import java.util.HashMap;
import java.util.List;

public interface IFangXingService {
	public FangXing getFangXingById(int fangXingId);
        public boolean deleteFangXingById(int fangXingId);
        public boolean addFangXing(FangXing fangXing);
        public boolean updateFangXing(FangXing fangXing);
        public int getSelectRows(HashMap map);
        public List<FangXing> getSelectPage(HashMap map);
        public boolean selectHaos(FangXing fangXing);
        public List getAllFangXingHao();
        public List getAllFangXing();
}
