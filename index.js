'use strict';

var path = require('path');
var subtitleExtensions = require('subtitle-extensions');

module.exports = function (filepath) {
  var ext = path.extname(filepath).toLowerCase();

  return subtitleExtensions.indexOf(ext) > -1
};
