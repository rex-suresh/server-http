## SERVER
----
  A simple http sever with handlers <br>
  > ( NotFound, invalidMethod, showRequest, fileHandler, router)

  SYNTAX : 
  ``` js
  const { server } = require('server');

  const handlers = [fn1, fn2, ...];
  server(port, handlers);
  ```

  > **routeRequest**
  ``` js
  const { routeRequest } = require('server');

  const routes = [
    ['/', { GET: showHomeHandler }], 
    ['/path', { POST: doNothing, GET: doSomething }]
    ];

  const router = routeRequest(routes); // route handler
  ```
