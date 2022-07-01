const fs = require('fs');
const { notFoundHandler } = require('./app/notFoundHandler.js');
const { fileHandler } = require('./app/handleFiles.js');
const { createRouter } = require('./core/router.js');


const createRouter = (path) => {
  const handlers = [
    fileHandler(path, fs),
    notFoundHandler
  ];
  
  return createRouter(handlers);
};

module.exports = { createRouter };
