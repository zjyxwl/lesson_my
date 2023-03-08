"use strict";

require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
var a = 1;
var b = 2;
var c = a + b;
var func = function func() {
  return a + b + c;
};
new Promise(function (resolve, reject) {
  resolve(true);
});
