class LuyenthiController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/luyen-thi-chung-chi/chi-tiet", {title : 'Luyện thi chứng chỉ'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new LuyenthiController();
  