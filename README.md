# fast-finger-backend
 This is the code for backend of fast-finger project - https://github.com/pesto-students/b6-fast-fingers-raman32
## Installing dependencies
  Run npm install on the root folder
## Setting env variables
  Create a .env file on the root directory for developement purpose and add the following **env** variable
  ENV_NAME | VALUE
  ------------ | -------------
  PORT | 3000
  DB_HOST | dabase host server
  DB_PORT | database port 
  DB_NAME | database name
  DB_USER | database user
  DB_PASSWORD | databse user password
  TOKEN_SECRET | jwt token secret
  BCRYPT_SALT | bcypt salt
  Set these varaibles accordingly on your server for hosting
## Database
  Databse consists of three tables **users**, **words**, **game**
  ###  **users**
    +----------+--------------+------+-----+---------+----------------+
    | Field    | Type         | Null | Key | Default | Extra          |
    +----------+--------------+------+-----+---------+----------------+
    | name     | varchar(255) | YES  |     | NULL    |                |
    | email    | varchar(255) | NO   |     | NULL    |                |
    | password | varchar(255) | NO   |     | NULL    |                |
    | id       | int          | NO   | PRI | NULL    | auto_increment |
    +----------+--------------+------+-----+---------+----------------+
### **game**
    +---------+--------------+------+-----+---------+----------------+
    | Field   | Type         | Null | Key | Default | Extra          |
    +---------+--------------+------+-----+---------+----------------+
    | id      | int unsigned | NO   | PRI | NULL    | auto_increment |
    | user_id | int unsigned | NO   |     | NULL    |                |
    | score   | int unsigned | NO   |     | NULL    |                |
    +---------+--------------+------+-----+---------+----------------+
### **words**
    +------------+------------------------------+------+-----+---------+----------------+
    | Field      | Type                         | Null | Key | Default | Extra          |
    +------------+------------------------------+------+-----+---------+----------------+
    | id         | int                          | NO   | PRI | NULL    | auto_increment |
    | word       | varchar(50)                  | NO   |     | NULL    |                |
    | difficulty | enum('easy','medium','hard') | NO   |     | NULL    |                |
    +------------+------------------------------+------+-----+---------+----------------+


