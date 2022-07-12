## SERVER
----
  A simple http sever with handlers <br>
  > ( NotFound, invalidMethod, showRequest, fileHandler, router)

  SYNTAX : 
  ``` js
  const { server } = require('server');

  const handlers = [showReq, fileHandler('path', fs), ..., notFoundHandler];
  server(port, handlers);
  ```

  > **routeRequest**
  ``` js
  const { routeRequest } = require('server');

  const routes = [
    ['/', { GET: showHomeHandler }], 
    ['/path', { POST: doNothing, GET: doSomething }]
    ];

  const subRouter = routeRequest(routes); // route handler
  ```
