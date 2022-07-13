## SERVER
----
  A simple http sever with handlers <br>
  > ( NotFound, invalidMethod, showRequest, fileHandler, router)

  SYNTAX : 
  ``` js
  const { server, createRouter } = require('server');

  const router = createRouter(showReq, fileHandler('path', fs), ..., notFoundHandler);
  server(port, router);
  ```

  > **routeRequest Handler**
  ``` js
  const { routeRequest } = require('server');

  const routes = [
    ['/', { GET: showHomeHandler }], 
    ['/path', { POST: doNothing, GET: doSomething }]
    ];

  const subRouter = routeRequest(routes); // route handler
  ```
