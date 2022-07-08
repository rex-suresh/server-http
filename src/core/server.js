const { createServer } = require('http');
const { URL } = require('url');
const { createRouter } = require('./asyncRouter.js');

const startServer = (port, handlers) => {
  const router = createRouter(handlers);
  
  const server = createServer((request, response) => {
    const { method, url } = request;
    const host = request.headers.host;
    request.url = new URL(`http://${host}${url}`);
    
    if (method === 'POST') {
      let data = ''
      request.on('data', (chunk) => data += chunk);
      request.on('end', () => {
        request.bodyParams = new URLSearchParams(data);
        router(request, response);
      });
      return;
    }
    
    router(request, response);
  });
  
  const onStart = () =>
    console.log(`started server on port ${server.address().port}`);
  server.listen(port, onStart);
};

module.exports = { startServer };
