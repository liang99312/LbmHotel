CREATE DATABASE hotel DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE `hotel`.`user_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `load_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `age` INT NULL,
  `sex` VARCHAR(45) NULL,
  `zhiwei` VARCHAR(45) NULL,
  `quanxian` VARCHAR(1000) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

insert into user_t (id,user_name,load_name, password, sex, age, zhiwei, quanxian) 
  values(1,'admin','a','a','',0,'','');

CREATE TABLE `hotel`.`fangjian_t` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fj_hao` VARCHAR(45) NULL,
  `luo_ceng` VARCHAR(45) NULL,
  `fuze_ren` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `remark` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;