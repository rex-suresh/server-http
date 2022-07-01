const { startServer } = require('./src/core/server.js');
const { fileHandler } = require('./src/app/handleFiles.js');
const { invalidMethodHandler } = require('./src/app/invalidMethodHandler.js');
const { notFoundHandler } = require('./src/app/notFoundHandler.js');
const { showReq } = require('./src/app/showRequest.js');
const { routeRequest } = require('./src/app/requestRouter.js');

module.exports = {
  server: startServer,
  showReq,
  fileHandler,
  invalidMethodHandler,
  notFoundHandler,
  routeRequest
};
