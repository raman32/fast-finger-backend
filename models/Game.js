var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
connection.connect();

const getHighScoreAsync = () => new Promise((resolve, reject) => {
  const query = connection.query(
    "SELECT * FROM game ORDER BY score ASC LIMIT 20",
    (err, results) => {
      if (err)
        reject({
          status: "error",
          message: "internal error",
        });
      resolve(results);
    }
  );
});

function getHighScores(req, res) {
  const query = connection.query(
    "SELECT name, score FROM game LEFT JOIN users ON users.id = game.user_id ORDER BY score ASC LIMIT 20;",
    (err, results) => {
      if (err)
        res.status(500).json({
          status: "error",
          message: "internal error",
          data: req.body,
        });
      res.json(results);
    }
  );
}
function addScore(req, res) {
  const query = connection.query(
    "INSERT INTO game (user_id, score) VALUES (?,?)",
    [req.user._id, req.body.score]
  );
  query.on("end", () => {
    res.status(200).json({
      status: "success",
    });
  });
  query.on("error", () => {
    res.status(500).json({
      status: "error",
      message: "internal error",
      data: req.body,
    });
  });
}
module.exports = { getHighScores, addScore, getHighScoreAsync };
