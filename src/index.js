import http from "http";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
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

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(
    JSON.stringify({
      result: "This is a simple-node-server",
      url: req.url,
    }),
  );
  res.end();
});

server.listen(3000, () => console.log("Server is started on 3000"));
