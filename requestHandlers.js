function start() {
  console.log("Request handler 'start' received");
}

function upload() {
  console.log("Request handler 'upload' received");
}

exports.start = start;
exports.upload = upload;
