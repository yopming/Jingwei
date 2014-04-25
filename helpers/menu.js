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
      // remove the 'markdown file extension'
      if (common.endsWith(file, '.md')) {
        file = common.disposeExtension(file);
      }
      results.push(path.basename(file));
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
menuMkdir = function(name, callback) {
  var _path = path.join(__dirname, dataConfig.folder, name);
  fs.exists(_path, function(exists) {
    if (exists)  return exists;
    fs.mkdir(_path, function(err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  });
};


/*
 * 'Remove' the specific directory or file
 * @function Rename the directory or file so that the menu scanner cannot recognise it
 * @param directory name
 */
menuRm = function() {
  
};

/*
 * Rename the specific directory or file's name
 * @param directory name
 */
menuMv = function(path) {
  
};

