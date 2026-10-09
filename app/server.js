const http = require('node:http');
const port = Number(process.env.PORT || 3000);
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'ok', service: 'support-demo' }));
  }
  if (req.url === '/') {
    res.writeHead(200);
    return res.end(JSON.stringify({ message: 'CI/CD troubleshooting demo' }));
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'not_found' }));
});
if (require.main === module) server.listen(port, '0.0.0.0', () => console.log(`Listening on ${port}`));
module.exports = server;
