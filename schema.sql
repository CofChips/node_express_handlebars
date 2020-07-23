CREATE DATABASE learninglistdb;

USE learninglistdb;

CREATE TABLE list
(
	id int NOT NULL AUTO_INCREMENT,
	learn_name varchar(255) NOT NULL,
    mastered boolean DEFAULT false,
	PRIMARY KEY (id)
);