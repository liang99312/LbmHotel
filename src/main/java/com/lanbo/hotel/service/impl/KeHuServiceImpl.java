package com.lanbo.hotel.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.lanbo.hotel.dao.IKeHuDao;
import com.lanbo.hotel.pojo.KeHu;
import com.lanbo.hotel.service.IKeHuService;
import java.util.HashMap;
import java.util.List;

@Service("keHuService")
public class KeHuServiceImpl implements IKeHuService {

    @Resource
    private IKeHuDao keHuDao;

    @Override
    public KeHu getKeHuById(int keHuId) {
        // TODO Auto-generated method stub
        return (KeHu) this.keHuDao.selectById(keHuId);
    }

    @Override
    public boolean deleteKeHuById(int keHuId) {
        return this.keHuDao.deleteById(keHuId) == 1;
    }

    @Override
    public boolean addKeHu(KeHu keHu) {
        return this.keHuDao.insert(keHu) == 1;
    }

    @Override
    public boolean updateKeHu(KeHu keHu) {
        return this.keHuDao.updateById(keHu) == 1;
    }

    @Override
    public int getSelectRows(HashMap map) {
        return this.keHuDao.selectRows(map);
    }

    @Override
    public List<KeHu> getSelectPage(HashMap map) {
        return (List<KeHu>)this.keHuDao.selectByPage(map);
    }

    public boolean selectHaos(KeHu keHu) {
        return this.keHuDao.selectHaos(keHu)>0;
    }

    public KeHu getLoadKeHu(String loadName, String password) {
        return this.keHuDao.selectByNameAndPassword(loadName, password);
    }

    public boolean updatePassword(KeHu keHu) {
        return this.keHuDao.updatePassword(keHu) == 1;
    }
}
