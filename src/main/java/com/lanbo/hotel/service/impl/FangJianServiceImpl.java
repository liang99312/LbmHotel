package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IFangJianDao;
import com.lanbo.hotel.pojo.FangJian;
import com.lanbo.hotel.service.IFangJianService;
import java.util.HashMap;
import java.util.List;

@Service("fangJianService")
public class FangJianServiceImpl implements IFangJianService {

    @Resource
    private IFangJianDao fangJianDao;

    @Override
    public FangJian getFangJianById(int fangJianId) {
        // TODO Auto-generated method stub
        return (FangJian) this.fangJianDao.selectById(fangJianId);
    }

    @Override
    public boolean deleteFangJianById(int fangJianId) {
        return this.fangJianDao.deleteById(fangJianId) == 1;
    }

    @Override
    public boolean addFangJian(FangJian fangJian) {
        return this.fangJianDao.insert(fangJian) == 1;
    }

    @Override
    public boolean updateFangJian(FangJian fangJian) {
        return this.fangJianDao.updateById(fangJian) == 1;
    }

    @Override
    public int getSelectRows(HashMap map) {
        return this.fangJianDao.selectRows(map);
    }

    @Override
    public List<FangJian> getSelectPage(HashMap map) {
        return (List<FangJian>)this.fangJianDao.selectByPage(map);
    }

    @Override
    public boolean selectHaos(FangJian fangJian) {
        return this.fangJianDao.selectHaos(fangJian)>0;
    }

    @Override
    public List getAllFangJian(HashMap map) {
        return this.fangJianDao.selectAllFangJian(map);
    }

}
