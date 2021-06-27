const RESOURCE_PATH = '/foodlog';

const viewController = {
  new(req, res, next){
    res.render('FoodNew')
  },

  index(req, res, next){
    res.render('FoodIndex', {foodlogs: res.locals.data.foodlogs})
  },

  show(req, res, next){
    res.render('FoodShow', {foodlogs: res.locals.data.foodlogs})
  },

  edit(req, res, next){
    res.render('FoodEdit', {foodlogs: res.locals.data.foodlogs})
  },

  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },

  redirectShow(req, res, next){
    res.redirect(RESOURCE_PATH + `/${req.params.id}`)
  }
};

module.exports = viewController;
