### Schema
IF EXIST DROP burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date varchar(255) DEFAULT "11/17/17",
	PRIMARY KEY (id)
);
