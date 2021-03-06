CREATE DATABASE hotel DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `hotel`.`user_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL,
  `loadname` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `age` INT NULL,
  `sex` VARCHAR(45) NULL,
  `zhiwei` VARCHAR(45) NULL,
  `quanxian` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into `hotel`.user_t (id,username,loadname, password, sex, age, zhiwei, quanxian) 
  values(1,'admin','a','a','',0,'','');

CREATE TABLE `hotel`.`fangjian_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fjhao` VARCHAR(45) NULL,
  `luoceng` VARCHAR(45) NULL,
  `fangxing_id` INT null,
  `fuzeren` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `hotel`.`yuding_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `kehu_id` INT NULL,
  `kehu` VARCHAR(45) NULL,
  `zjhao` VARCHAR(45) NULL,
  `ydsj` DATETIME NULL,
  `rzsj` DATETIME NULL,
  `rzts` INT NULL DEFAULT 0,
  `rzfjs` INT NULL DEFAULT 0,
  `fuzeren` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `sex` VARCHAR(45) NULL,
  `sfzhao` VARCHAR(45) NULL,
  `dianhua` VARCHAR(45) NULL,
  `fangxing_id` INT NULL,
  `fangxing` VARCHAR(45) NULL,
  `jiage` FLOAT NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `hotel`.`kehu_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `bianhao` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `sex` VARCHAR(45) NULL,
  `age` INT NULL DEFAULT 0,
  `sfzhao` VARCHAR(45) NULL,
  `dianhua` VARCHAR(45) NULL,
  `dengji` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `hotel`.`fangxing_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fxhao` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `jiage` FLOAT NULL,
  `zhutu` VARCHAR(200) NULL,
  `tupian` VARCHAR(2000) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `hotel`.`ruzhu_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `kehu_id` INT NULL,
  `kehu` VARCHAR(45) NULL,
  `bianhao` VARCHAR(45) NULL,
  `yuding` VARCHAR(45) NULL,
  `fjhao` VARCHAR(45) NULL,
  `jzsj` DATETIME NULL,
  `rzsj` DATETIME NULL,
  `rzts` INT NULL DEFAULT 0,
  `fuzeren` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `sex` VARCHAR(45) NULL,
  `sfzhao` VARCHAR(45) NULL,
  `dianhua` VARCHAR(45) NULL,
  `fangjian_id` INT NULL,
  `fangxing` VARCHAR(45) NULL,
  `jiage` FLOAT NULL,
  `jine` FLOAT NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
