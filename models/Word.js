var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect();
function getRandomWords(difficulty,callback) {
  const query = connection.query(
    "SELECT * FROM words where difficulty = ? ORDER BY RAND() LIMIT 20",[difficulty],
    (err, results) => {
      if (err)
        res.status(500).json({
          status: "error",
          message: "internal error",
          data: req.body,
        });
        callback(results);
    }
  );
}
module.exports = { getRandomWords };
