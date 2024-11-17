CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    mobile VARCHAR(15),
    password VARCHAR(255),
    dob_day INT,
    dob_month VARCHAR(10),
    dob_year INT,
    gender VARCHAR(10)
);
