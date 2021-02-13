import http from "http";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "Qlalfqjsgh1!",
  port: "3306",
  database: "node_simple_server",
});

db.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Database is connected");
});

const server = http.createServer((req, res) => {
  console.log(req.url);

  db.query("show databases;", (err, result, fields) => {
    let data = {};
    if (err) {
      data = { err };
    } else if (result) {
      data = { result };
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        result: "This is a simple-node-server",
        url: req.url,
        data,
      }),
    );
    res.end();
  });
});

server.listen(3000, () => console.log("Server is started on 3000"));
