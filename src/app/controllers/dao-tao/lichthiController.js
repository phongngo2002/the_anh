class LichthiController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/lich-thi", {title : 'Lịch thi'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new LichthiController();
  