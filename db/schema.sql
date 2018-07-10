-- DROP DATABASE IF EXISTS curriculum_it;
-- CREATE DATABASE curriculum_it;
-- USE curriculum_it;

-- CREATE TABLE users(
--   userid VARCHAR(50) NOT NULL,
--   name VARCHAR(50),
--   password VARCHAR(10),
--   PRIMARY KEY (userid)
-- );


-- CREATE TABLE tmp_items(
--   dealerID VARCHAR(500) NOT NULL,
--   name VARCHAR(1000),
--   brand VARCHAR(1000),
--   image VARCHAR(10000),
--   description TEXT(10000),
--   catagory_tree TEXT(1000),
--   stockID VARCHAR(128),
--   price VARCHAR(128),
--   extended_description TEXT(10000),
--   length VARCHAR(128),
--   width VARCHAR(128),
-- height VARCHAR(128),
-- weight VARCHAR(128),
-- video TEXT(5000),
-- PRIMARY KEY (stockID)
-- );
-- CREATE TABLE course(
--   courseid INTEGER(11) AUTO_INCREMENT NOT NULL,
--   name VARCHAR(50),
--   description VARCHAR(150),
--   PRIMARY KEY (courseid)
-- );

-- CREATE TABLE `sessions` (
--   `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
--   `expires` int(11) unsigned NOT NULL,
--   `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
--   PRIMARY KEY (`session_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- CREATE TABLE users_to_course(
--   signups INTEGER(11) AUTO_INCREMENT NOT NULL,
--   userid VARCHAR(50),
--   courseid INTEGER(11),
--   inprogress BOOLEAN DEFAULT false,
--   PRIMARY KEY (signups),
--   CONSTRAINT fk_course FOREIGN KEY (courseid) REFERENCES course(courseid),
--   CONSTRAINT fk_users FOREIGN KEY (userid) REFERENCES users(userid)
-- );

-- CREATE TABLE steps(
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,
--   name VARCHAR(50),
--   courseid INTEGER(11),
--   PRIMARY KEY (id),
-- CONSTRAINT fk_id_course FOREIGN KEY (courseid) REFERENCES course(courseid)
-- );

-- CREATE TABLE `sessions` (
--   `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
--   `expires` int(11) unsigned NOT NULL,
--   `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
--   PRIMARY KEY (`session_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- select u.name, c.name, uc.inprogress from users u, course c, users_to_course uc where (uc.userid = u.userid) and (uc.courseid = c.courseid);


-- CREATE TABLE garage_vehicles(
--   garage_vehicle_id INTEGER(5) AUTO_INCREMENT NOT NULL ,
--   make_year YEAR(4) NOT NULL,
--   make VARCHAR(20) NOT NULL,
--   model VARCHAR(20) NOT NULL,
--   sub_model VARCHAR(30) NULL,
--   PRIMARY KEY (garage_vehicle_id )  
-- );

-- CREATE TABLE tpm_product_vehicle(
--   garage_vehicle_id INTEGER(5) AUTO_INCREMENT NOT NULL ,
--   make_year YEAR(4) NOT NULL,
--   make VARCHAR(20) NOT NULL,
--   model VARCHAR(20) NOT NULL,
--   sub_model VARCHAR(30) NULL,
--   PRIMARY KEY (garage_vehicle_id )  
-- );

-- CREATE TABLE `tpm_vehicle_item` (
--   `make_year` year(4) NOT NULL,
--   `make` varchar(20) NOT NULL,
--   `model` varchar(20) NOT NULL,
--   `sub_model` varchar(30) NOT NULL,
--   `stockID` varchar(128) DEFAULT NULL,
--   `brand` varchar(1000) DEFAULT NULL,
--   PRIMARY KEY (`make_year`,`make`,`model`,`sub_model`),
--   KEY `fk_id_stockID` (`stockID`),
--   CONSTRAINT `fk_id_stockID` FOREIGN KEY (`stockID`) REFERENCES `tpm_items` (`stockID`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- CREATE TABLE tpm_vehicle_item (
--   make_year year(4) NULL,
--   make varchar(20) NULL,
--   model varchar(20)  NULL,
--   sub_model varchar(30) NULL,
--   stockID varchar(128) NOT NULL,
--   brand varchar(1000) NOT NULL,
--   PRIMARY KEY (stockID,brand),
--   KEY fk_id_stockID (stockID),
--   CONSTRAINT fk_stockID FOREIGN KEY (stockID) REFERENCES tpm_items (stockID)
--  )

-- CREATE TABLE tpm_vehicle_item (
--   vehicle_item_id int(11) NOT NULL AUTO_INCREMENT,
--   make_year year(4) DEFAULT NULL,
--   make varchar(20) DEFAULT NULL,
--   model varchar(20) DEFAULT NULL,
--   sub_model varchar(30) DEFAULT NULL,
--   stockID varchar(128) NOT NULL,
--   brand varchar(500) NOT NULL,
--   PRIMARY KEY (stockID,vehicle_item_id),
--   CONSTRAINT fk_stockID FOREIGN KEY (stockID) REFERENCES tpm_items (stockID)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- mysql> SET foreign_key_checks = 0;
-- ALTER TABLE tpm_vehicle_items ADD CONSTRAINT fk_stockID FOREIGN KEY (stockID) REFERENCES tpm_items (stockID);


-- ALTER TABLE all_vehicles
-- ADD PRIMARY KEY (model_year, model_make_id, model_name, model_trim );

--  CREATE TABLE garage_vehicles(
--    garage_vehicle_id INTEGER(5) AUTO_INCREMENT NOT NULL,
--    model_year YEAR(4) NOT NULL,
--    CONSTRAINT fk_model_trim FOREIGN KEY (model_trim) REFERENCES all_vehicles(model_trim);
--    PRIMARY KEY (garage_vehicle_id )


-- CREATE TABLE garage_vehicles (
--   garage_vehicle_id INTEGER(5) AUTO_INCREMENT NOT NULL ,
--   model_id INTEGER(11) NOT NULL,
--   userid VARCHAR (50) NOT NULL,
--   CONSTRAINT fk_model_id FOREIGN KEY (model_id) REFERENCES `all_vehicles`(model_id) ,
--   CONSTRAINT fk_user_id FOREIGN KEY (userid) REFERENCES `users`(userid) ,
--   PRIMARY KEY (garage_vehicle_id )  
-- );