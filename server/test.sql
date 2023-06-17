
CREATE DATABASE /*!32312 IF NOT EXISTS*/ `test` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `test`;

DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `resource`;
DROP TABLE IF EXISTS `category`;

CREATE TABLE `user` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=276 DEFAULT CHARSET=latin1;


INSERT INTO `user` 
VALUES
(null,'Alison Lee','mypasswd','alison@go.pasadena.edu'),
(null,'Tim XMan','melt-down','xman@go.pasadena.edu'),
(NULL,'Wonder Jones','wonder32','wonder.jones@gmail.edu');

DROP TABLE IF EXISTS `resource`;
CREATE TABLE `resource` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

INSERT INTO `resource` 
VALUES (1,'1','Transportation'),
(2,'2','Communications'),
(3,'3','Engineering'),
(4,'4','Search and Rescue'),
(5,'5','Education'),
(6,'6','Energy');


CREATE TABLE `category` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  `last` INT DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

INSERT INTO `category` 
VALUES 
(1,'1','must evac, secure lockdown',1),
(2,'2','may evac, secure lockdown',1),
(3,'3','no evac, limited lockdown',1),
(4,'4','no evac, no lockdown',1);

