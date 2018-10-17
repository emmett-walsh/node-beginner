function route(pathname, handle) {
  console.log("Routing a request for " + pathname);
  if (isRequestHandlerFound(pathname)) {
    handle[pathname]();
  }
  console.log("No request handler found for " + pathname);

  function isRequestHandlerFound(pathname) {
    return typeof handle[pathname] === "function";
  }
}
exports.route = route;
