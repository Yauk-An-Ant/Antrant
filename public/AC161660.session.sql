--@block
CREATE TABLE Accounts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    pwd VARCHAR(50) NOT NULL
);
--@block
SELECT * FROM accounts;

