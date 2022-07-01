const { invalidMethodHandler } = require('./invalidMethodHandler.js');

const routeRequest =
  (routes) => {
    return (request, response, next) => {
      const pathname = request.url.pathname;
      const method = request.method;

      for (let index = 0; index < routes.length; index++) {
        const [path, handles] = routes[index];
        
        if (path === pathname) {
          if (handles[method]) {
            const handler = handles[method];
            handler(request, response, next);
          } else {
            invalidMethodHandler(request, response);
          }
          return;
        }
      }
      next();
    };
  };

module.exports = { routeRequest };
