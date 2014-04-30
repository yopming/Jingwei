var fs = require('fs');
var path = require('path');
var common = require('./common.js');

var dataConfig = require('../configs/data.js');

/*
 * Get the eligible name of directory or file under the specific directory
 * @param directory name
 * @return
 */

function menuLs(callback) {
  var results = [];
  var avenue = path.resolve(__dirname, dataConfig.folder);
  fs.readdir(avenue, function(err, files) {
    if (err) return err;
    if (!files.length) return;

    files.map(function(file){ 
      return path.join(avenue, file);
    }).filter(function(file){
      return fs.statSync(file).isDirectory() || common.compareExtension(file, 'md');
    }).forEach(function(file){
      var filetype = '';
      // remove the 'markdown file extension'
      if (common.endsWith(file, '.md')) {
        file = common.disposeExtension(file);
        filetype = 'md';
      } else {
        filetype = 'folder';
      }
      file = path.basename(file);
      var item = new Array(file, filetype);
      results.push(item);
    });
    callback(results);
  });
}
exports.menuLs = menuLs;


/*
 * Mkdir under the specific directory
 * @param directory name
 * @param new directory name
 */
function menuMkdir(name, callback) {
  var _path = common.buildPath(name);
  fs.exists(_path, function(exists) {
    if (exists) return exists;
    fs.mkdir(_path, function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  });
}
exports.menuMkdir = menuMkdir;


/*
 * 'Remove' the specific directory or file
 * @function Rename the directory or file so that the menu scanner cannot recognise it
 * @param directory name
 */
function menuRm(name, callback) {
  var trashname = "__trash__";
  var _path = common.buildPath(name);
  var _trash = path.join(__dirname, dataConfig.folder, '..', trashname);
  var _trashedPath = path.join(__dirname, dataConfig.folder, '..', trashname, common.getTime() + '-' + name);
  fs.exists(_path, function(exists) {
    if (!exists) return exists;
    fs.exists(_trash, function(exists) {
      if (!exists) {
        fs.mkdir(_trash);
      }
      fs.rename(_path, _trashedPath, function(err) {
        if (err) {
          callback(err);
        } else {
          callback(null);
        }
      });
    });
  });
}
exports.menuRm = menuRm;

/*
 * Rename the specific directory or file's name
 * @param directory name
 */
function menuMv(oldName, newName, callback) {
  var _oldPath = common.buildPath(oldName);
  var _newPath = common.buildPath(newName);
  fs.exists(_oldPath, function(exists) {
    if (!exists) return exists;
    fs.rename(_oldPath, _newPath, function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  });
}
exports.menuMv = menuMv;

