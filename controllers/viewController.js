const RESOURCE_PATH = '/logs';

const viewController = {

  new(req, res, next){
    console.log("neeeew")
    // res.send('New page')
    res.render('New')
  },

  index(req, res, next){
    res.render('Index', {logs: res.locals.data.logs})
  },

  show(req, res, next){
    res.render('Show', {logs: res.locals.data.logs})
  },

  edit(req, res, next){
    res.render('Edit', {logs: res.locals.data.logs})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = viewController;
