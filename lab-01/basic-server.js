// basic-server.js
// Simple HTTP server using Node's built-in http module
// Responds with "Hello" on any request

const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello');
});

server.listen(PORT, () => {
  console.log(`Basic HTTP server is running on port ${PORT}`);
});
