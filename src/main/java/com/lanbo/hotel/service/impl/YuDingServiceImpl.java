package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IYuDingDao;
import com.lanbo.hotel.pojo.YuDing;
import com.lanbo.hotel.service.IYuDingService;
import java.util.HashMap;
import java.util.List;

@Service("yuDingService")
public class YuDingServiceImpl implements IYuDingService {

    @Resource
    private IYuDingDao yuDingDao;

    @Override
    public YuDing getYuDingById(int yuDingId) {
        // TODO Auto-generated method stub
        return (YuDing) this.yuDingDao.selectById(yuDingId);
    }

    @Override
    public boolean deleteYuDingById(int yuDingId) {
        return this.yuDingDao.deleteById(yuDingId) == 1;
    }

    @Override
    public boolean addYuDing(YuDing yuDing) {
        return this.yuDingDao.insert(yuDing) == 1;
    }

    @Override
    public boolean updateYuDing(YuDing yuDing) {
        return this.yuDingDao.updateById(yuDing) == 1;
    }

    @Override
    public int getSelectRows(HashMap map) {
        return this.yuDingDao.selectRows(map);
    }

    @Override
    public List<YuDing> getSelectPage(HashMap map) {
        return (List<YuDing>)this.yuDingDao.selectByPage(map);
    }
}
