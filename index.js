var httpErrors = require('http-custom-errors');

function functionize (str) {
  return str[0].toLowerCase() + str.slice(1);
}

Object.keys(httpErrors).forEach(function (e) {

  var friendlyName, val = httpErrors[e];

  // Proxy `http-custom-errors` onward
  module.exports[e] = val;

  if (val.prototype instanceof httpErrors.HTTPError) {
    friendlyName = functionize(e).replace('Error', '');
    // Export a factory with the friendly name
    module.exports[friendlyName] = function (msg) {
      return new val(msg);
    };
  }
});

