import http from "http";

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
