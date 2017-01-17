package com.lanbo.testmybatis;

import javax.annotation.Resource;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.alibaba.fastjson.JSON;
import com.lanbo.hotel.pojo.User;
import com.lanbo.hotel.pojo.YuDing;
import com.lanbo.hotel.service.IUserService;
import com.lanbo.hotel.service.IYuDingService;
import java.sql.Timestamp;
import java.util.Date;

@RunWith(SpringJUnit4ClassRunner.class)		//表示继承了SpringJUnit4ClassRunner类
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})

public class TestMyBatis {
	private static Logger logger = Logger.getLogger(TestMyBatis.class);
//	private ApplicationContext ac = null;
	@Resource
	private IUserService userService = null;
        
        @Resource
	private IYuDingService yuDingService = null;

//	@Before
//	public void before() {
//		ac = new ClassPathXmlApplicationContext("applicationContext.xml");
//		userService = (IUserService) ac.getBean("userService");
//	}

	@Test
	public void test1() {
		User user = userService.getUserById(1);
		// System.out.println(user.getUserName());
		// logger.info("值："+user.getUserName());
                System.out.println("user=" + user);
		logger.info(JSON.toJSONString(user));
                
                Timestamp ts = new Timestamp(System.currentTimeMillis());  
                YuDing yd = new YuDing();
                yd.setFjHao("202");
                yd.setFuzeRen("ab");
                yd.setKeHu("李四1");
                yd.setYdSj(ts);
                yd.setZjHao("3216547854211");
                yd.setState("已生效");
                
          //      yuDingService.addYuDing(yd);
                
                YuDing a = yuDingService.getYuDingById(1);
                
                System.out.println("a=" + a);
                
	}
}
