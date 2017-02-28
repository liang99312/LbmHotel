package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IFangXingDao;
import com.lanbo.hotel.pojo.FangXing;
import com.lanbo.hotel.service.IFangXingService;
import java.util.HashMap;
import java.util.List;

@Service("fangXingService")
public class FangXingServiceImpl implements IFangXingService {

    @Resource
    private IFangXingDao fangXingDao;

    @Override
    public FangXing getFangXingById(int fangXingId) {
        // TODO Auto-generated method stub
        return (FangXing) this.fangXingDao.selectById(fangXingId);
    }

    @Override
    public boolean deleteFangXingById(int fangXingId) {
        return this.fangXingDao.deleteById(fangXingId) == 1;
    }

    @Override
    public boolean addFangXing(FangXing fangXing) {
        return this.fangXingDao.insert(fangXing) == 1;
    }

    @Override
    public boolean updateFangXing(FangXing fangXing) {
        return this.fangXingDao.updateById(fangXing) == 1;
    }

    @Override
    public int getSelectRows(HashMap map) {
        return this.fangXingDao.selectRows(map);
    }

    @Override
    public List<FangXing> getSelectPage(HashMap map) {
        return (List<FangXing>)this.fangXingDao.selectByPage(map);
    }

    public boolean selectHaos(FangXing fangXing) {
        return this.fangXingDao.selectHaos(fangXing)>0;
    }

    public List getAllFangXingHao() {
        return this.fangXingDao.selectAllFangXingHao();
    }

}
