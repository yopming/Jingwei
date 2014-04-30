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
      if (err) {
        res.locals.error = err;
      }
      res.redirect('/admin/menu/all');
    });
  });

  /*
   * Menu
   * Edit
   * @method get
   */
  app.get('/admin/menu/edit/:menu/:menutype', function(req, res) {
    var menuname = req.param('menu');
    var menutype = req.param('menutype');
    res.render('admin/menu_edit', {
      name:menuname,
      type:menutype
    });
  });

  /*
   * Menu
   * Edit
   * @method post
   */
  app.post('/admin/menu/edit', function(req, res) {
    var menuname = req.body.original;
    var menutype = req.body.type;
    var newMenuName = req.body.name;
    if (menutype == 'md') {
      menuname += '.md';
      newMenuName += '.md';
    }
    menu.menuMv(menuname, newMenuName, function(err) {
      if (err) {
        res.locals.error = err;
      }
      res.redirect('/admin/menu/all');
    });
  });

  /*
   * Menu
   * Remove
   * @method get
   */
  app.get('/admin/menu/remove/:menu/:menutype', function(req, res) {
    var menuname = req.param('menu');
    var menutype = req.param('menutype');
    if (menutype == 'md') {
      menuname += '.md';
    }
    menu.menuRm(menuname, function(err) {
      if (err) {
        res.locals.error = err;
      }
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
