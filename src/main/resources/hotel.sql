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
  `jibie` VARCHAR(45) NULL,
  `jiage` FLOAT NULL,
  `fuzeren` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `hotel`.`yuding_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fjhao` VARCHAR(45) NULL,
  `kehu` VARCHAR(45) NULL,
  `zjhao` VARCHAR(45) NULL,
  `ydsj` DATETIME NULL,
  `rzsj` DATETIME NULL,
  `fuzeren` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;