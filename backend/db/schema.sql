DROP DATABASE IF EXISTS project5;
CREATE DATABASE project5;


USE project5;

CREATE TABLE users (
    userId INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(255),
    email VARCHAR(255),
    pass VARCHAR(255),
    phoneNumber INT,
    PRIMARY KEY (userId)
);


CREATE TABLE resturants(
    id int AUTO_INCREMENT NOT NULL,
    resturantImage varchar(255),
    resturantName varchar(255),
    adress varchar(255),
    plates varchar(255),
    phoneNumber int,
    email varchar(255),
    pass varchar(255),
    createdAt DATETIME,
    rates double (2,1) DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    id int AUTO_INCREMENT NOT NULL,
    categoryName varchar(255),
    resturant_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (resturant_id) REFERENCES resturants(id)

);

CREATE TABLE meals (
    id int AUTO_INCREMENT NOT NULL,
    category_id INT ,
    mealName varchar(255),
    mealImage varchar(255),
    price double(3,2),
    details varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE comments (
    id int AUTO_INCREMENT NOT NULL,
    comment VARCHAR(255),
    commenter VARCHAR(255),
    resturant_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (resturant_id) REFERENCES resturants(id)
);

CREATE TABLE orders(
    id int AUTO_INCREMENT NOT NULL,
    mealImage VARCHAR(255),
    mealName VARCHAR(255),
    mealPrice DOUBLE (3,2),
    Qty INT,
    totalPrice VARCHAR(255),
    orderDateTime DATE,
    userLocation VARCHAR(255),
    username VARCHAR(255),
    resturant_id INT,
    userId INT ,
    PRIMARY KEY (id)

);

CREATE TABLE users_cart (
    userId INT NOT NULL,
    resturant_id INT,
    mealName VARCHAR(255),
    Qty INT,
    price DOUBLE(3,2),
    PRIMARY KEY (userId,mealName)

);

CREATE TABLE usersAdresses (
    userId INT NOT NULL,
    city VARCHAR(255),
    neighborhood varchar(255),
    houseNumber INT,
    additionDescreption VARCHAR(255),
    PRIMARY KEY (userId)
);


