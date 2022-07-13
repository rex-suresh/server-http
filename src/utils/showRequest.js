let reqCount = 0;
const logReq = (request, response, next) => {
  console.log(request.method, request.url.pathname, ++reqCount);
  next();
};

module.exports = {showReq: logReq, logReq};
