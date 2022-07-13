const { startServer } = require('./src/core/server.js');
const { fileHandler } = require('./src/utils/handleFiles.js');
const { invalidMethodHandler } = require('./src/utils/invalidMethodHandler.js');
const { notFoundHandler } = require('./src/utils/notFoundHandler.js');
const { logReq, showReq} = require('./src/utils/showRequest.js');
const { routeRequest } = require('./src/utils/requestRouter.js');
const { injectReqParts } = require('./src/utils/injectReqParts.js');
const { createRouter } = require('./src/core/asyncRouter.js');

module.exports = {
  server: startServer,
  logReq,
  showReq,
  fileHandler,
  invalidMethodHandler,
  notFoundHandler,
  routeRequest,
  createRouter,
  injectReqParts
};
