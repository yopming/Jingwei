exports = module.exports = function(app) {

  var menu = require('../helpers/menu.js');

  /*
   * Jingwei
   * @method get
   */
  app.get('/', function(req, res) {
    menu.menuLs(function(results) {
      res.render('index', {
        menus: results
      });
    });
  });

  return app;
};
