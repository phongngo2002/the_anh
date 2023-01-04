class HomeController {
  // [Get] /news
  index(req, res) {
    res.render("partials/page/home", {title:  'Vias-corp'});
  }
}

module.exports = new HomeController();

// const homeController = require('')
