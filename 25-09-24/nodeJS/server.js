// server.mjs
const http =require("http");

const server = http.createServer((req, res) => {
    if(req.url==="/")
    {
  res.write
  res.end();
}
if(req.url==="/product")
{
    res.writeHead(200, { 'Content-Type': 'text/plain' });
}
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
