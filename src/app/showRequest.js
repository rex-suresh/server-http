let reqCount = 0;
const showReq = (request, response) => {
  console.log(request.method, request.url.pathname, ++reqCount);
  return false;
};

module.exports = {showReq};
