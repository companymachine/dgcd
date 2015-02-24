var Type = require('type-of-is');

// DGCL 102(a)(1)
var hasName = function(argument) {
  var name = argument.name;
  return argument.hasOwnProperty('name') &&
    Type.is(name, String) &&
    name.length > 0;
};

module.exports = function(argument) {
  return Type.is(argument, Object) &&
    hasName(argument);
};
