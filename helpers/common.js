var path = require('path');

module.exports = {
  'getExtension': getExtension,
  'compareExtension': compareExtension,
  'disposeExtension': disposeExtension,
  'endsWith': endsWith
};

// get the file's extension name
function getExtension(filename) {
  var ext = path.extname(filename||'').split('.');
  return ext[ext.length - 1];
}

// compare the file's extension name with a string
function compareExtension(filename, ext) {
  if (ext == getExtension(filename)) {
    return true;
  }
  return false;
}

// dispose the extension of file as a menu
function disposeExtension(filename) {
  return filename.substr(0, (filename.length-3));
}

// whether the string is end with parameter
function endsWith(filename, ext) {
  return filename.slice(-ext.length) == ext;
}
