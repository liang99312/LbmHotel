package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IRuZhuDao;
import com.lanbo.hotel.pojo.RuZhu;
import com.lanbo.hotel.service.IRuZhuService;
import java.util.HashMap;
import java.util.List;

@Service("ruZhuService")
public class RuZhuServiceImpl implements IRuZhuService {

    @Resource
    private IRuZhuDao ruZhuDao;

    @Override
    public RuZhu getRuZhuById(int ruZhuId) {
        // TODO Auto-generated method stub
        return (RuZhu) this.ruZhuDao.selectById(ruZhuId);
    }

    @Override
    public boolean deleteRuZhuById(int ruZhuId) {
        return this.ruZhuDao.deleteById(ruZhuId) == 1;
    }

    @Override
    public boolean addRuZhu(RuZhu ruZhu) {
        return this.ruZhuDao.insert(ruZhu) == 1;
    }

    @Override
    public boolean updateRuZhu(RuZhu ruZhu) {
        return this.ruZhuDao.updateById(ruZhu) == 1;
    }

    @Override
    public int getSelectRows(HashMap map) {
        return this.ruZhuDao.selectRows(map);
    }

    @Override
    public List<RuZhu> getSelectPage(HashMap map) {
        return (List<RuZhu>)this.ruZhuDao.selectByPage(map);
    }

    public boolean checkRuZhu(RuZhu ruZhu) {
        return this.ruZhuDao.updateState(ruZhu) == 1;
    }

    public boolean jieZhang(RuZhu ruZhu) {
        return this.ruZhuDao.jieZhang(ruZhu) == 1;
    }
}
