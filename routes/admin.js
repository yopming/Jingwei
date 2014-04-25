exports = module.exports = function(app) {

  var menu = require('../helpers/menu.js');

  /*
   * Admin
   * @method get
   */
  app.get('/admin', function(req, res) {
    res.render('admin');
  });

  /*
   * Menu
   * Add
   * @method get
   */
  app.get('/admin/menu/new', function(req, res) {
    res.render('admin/menu_add');
  });

  /*
   * Menu
   * Add
   * @method post
   */
  app.post('/admin/menu/new', function(req, res) {
    var newMenuName = req.body.name;
    menu.menuMkdir(newMenuName, function(err) {
      if (err) req.flash(err);
      res.redirect('/admin/menu/all');
    });
  });

  /*
   * Menu
   * All
   * @method get
   */
  app.get('/admin/menu/all', function(req, res) {
    var menus;
    menu.menuLs(function(results) {
      res.render('admin/menu_all', {menus:results});
    });
  });


  return app;
};
