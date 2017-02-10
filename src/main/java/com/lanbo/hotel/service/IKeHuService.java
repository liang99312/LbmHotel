package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.KeHu;
import java.util.HashMap;
import java.util.List;

public interface IKeHuService {
	public KeHu getKeHuById(int keHuId);
        public boolean deleteKeHuById(int keHuId);
        public boolean addKeHu(KeHu keHu);
        public boolean updateKeHu(KeHu keHu);
        public int getSelectRows(HashMap map);
        public List<KeHu> getSelectPage(HashMap map);
        public boolean selectHaos(KeHu keHu);
}
