const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect();

function signUp(req, res, next) {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(req.body.password, salt);
  const query = connection.query(
    `SELECT * from users WHERE email= ?`,
    [req.body.email],
    (err, results) => {
      if (err) {
        res.json({
          status: "error",
          message: "Internal Server Error",
          data: req.body,
        });
        res.end();
      }
      if (!!results.length) {
        res.json({
          status: "error",
          message: "Email Already exists",
          data: req.body,
        });
        res.end();
      } else {
        const query2 = connection.query(
          `INSERT INTO users (name, email, password) VALUES (?,?,?)`,
          [req.body.name, req.body.email, hashPassword]
        );
        query2.on("end", () => {
          next();
        });
        query2.on("error", () => {
          res.json({
            status: "error",
            message: "Internal Server Error",
            data: req.body,
          });
          res.end();
        });
      }
    }
  );
}
function signIn(req, res, next) {
  let token;
  const query = connection.query(`SELECT * from users WHERE email= ?`, [
    req.body.email,
  ]);
  query.on("result", (row, index) => {
    if (row) {
      const validPass = bcrypt.compareSync(req.body.password, row.password);
      if (validPass) {
        token = jwt.sign(
          { _id: row.id, _name: row.name },
          process.env.TOKEN_SECRET,
          { expiresIn: "2h" }
        );
        req.header.token = token;
        req.header.token_created_on = new Date();
        req.header.token_validity = "2h";
        req.header.userName = row.name;
        next();
        return;
      }
    }
    res.json({
      status: "error",
      message: "Invalid Email and Password Combinations",
      data: req.body,
    });
    res.end();
  });
  query.on("error", () => {
    res.json({
      status: "error",
      message: "Internal Server Error",
      data: req.body,
    });
    res.end();
  });
}

module.exports = { signUp, signIn };
