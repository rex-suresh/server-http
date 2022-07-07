let reqCount = 0;
const showReq = (request, response, next) => {
  console.log(request.method, request.url.pathname, ++reqCount);
  next();
};

module.exports = {showReq};
