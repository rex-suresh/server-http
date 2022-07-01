const { startServer } = require('./src/core/server.js');
const { createRouter } = require('./src/core/asyncRouter.js');
const { fileHandler } = require('./src/utils/handleFiles.js');
const { invalidMethodHandler } = require('./src/utils/invalidMethodHandler.js');
const { notFoundHandler } = require('./src/utils/notFoundHandler.js');
const { showReq } = require('./src/utils/showRequest.js');
const { routeRequest } = require('./src/utils/requestRouter.js');

module.exports = {
  server: startServer,
  createRouter,
  showReq,
  fileHandler,
  invalidMethodHandler,
  notFoundHandler,
  routeRequest
};
