var path = require('path');
var dataConfig = require('../configs/data.js');

module.exports = {
  'buildPath': buildPath,
  'getExtension': getExtension,
  'compareExtension': compareExtension,
  'disposeExtension': disposeExtension,
  'endsWith': endsWith,
  'getTime': getTime
};

// build the absolute path
function buildPath(name) {
  return path.join(__dirname, dataConfig.folder, name);
}

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

// get the timenow, and return a string
function getTime() {
  var date = new Date();
  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  var min  = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  var sec  = date.getSeconds();
  sec = (sec < 10 ? "0" : "") + sec;
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  month = (month < 10 ? "0" : "") + month;
  var day  = date.getDate();
  day = (day < 10 ? "0" : "") + day;
  return year + "" + month + "" + day + "" + hour + "" + min + "" + sec;
}
