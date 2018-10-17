var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    route(pathname(request.url), handle);
    response.writeHead(200, { "Content-Type": "text/plain"} );
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(3000);
  console.log("Server has started");
}

function pathname(unparsedUrl) {
  return url.parse(unparsedUrl).pathname;
}

exports.start = start;
