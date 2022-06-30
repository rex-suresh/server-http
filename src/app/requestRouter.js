const { createRouter } = require('../server/router.js');
const { handleMethod } = require('./handleMethod.js');

const routeRequest = (routes) => {
  const handlers = routes.map(route => handleMethod(...route));    
  return createRouter(handlers);
};

module.exports = { routeRequest };
