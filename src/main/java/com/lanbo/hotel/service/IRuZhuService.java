package com.lanbo.hotel.service;

import com.lanbo.hotel.pojo.RuZhu;
import java.util.HashMap;
import java.util.List;

public interface IRuZhuService {
	public RuZhu getRuZhuById(int ruZhuId);
        public boolean deleteRuZhuById(int ruZhuId);
        public boolean addRuZhu(RuZhu ruZhu);
        public boolean updateRuZhu(RuZhu ruZhu);
        public boolean checkRuZhu(RuZhu ruZhu);
        public int getSelectRows(HashMap map);
        public List<RuZhu> getSelectPage(HashMap map);
}
