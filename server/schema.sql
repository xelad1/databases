CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  userid int(11),
  message text,
  time timestamp(6),
  roomname varchar(50),
  PRIMARY KEY (id)
);


CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT,
  username varchar(50),
  first_name varchar(50),
  last_name varchar(50),
  age int(11),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

