CREATE DATABASE db_users;

SHOW DATABASES;

USE db_users;

-- USERS TABLE 
CREATE TABLE users(
    id INT(11) NOT NULL, 
    first_name VARCHAR(45) NOT NULL, 
    last_name VARCHAR(45) NOT NULL, 
    email VARCHAR(45) NOT null, 
    phone INT(12) NOT null, 
    comments TEXT NOT NULL, 
    state VARCHAR(12) NOT NULL DEFAULT "active"
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

DESCRIBE users;

SELECT * FROM users;
