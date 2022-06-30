const { createServer } = require('http');
const { URL } = require('url');
const { createRouter } = require('./router.js');

const startServer = (port, routes) => {
  const router = createRouter(routes);
  
  const server = createServer((request, response) => {
    const host = request.headers.host;
    const path = request.url;
    request.url = new URL(`http://${host}${path}`);

    router(request, response);
  });
  
  const onStart = () =>
    console.log(`started server on port ${server.address().port}`);
  server.listen(port, onStart);
};

module.exports = { startServer };
