class LuyenthiAllController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/luyen-thi-chung-chi", {title : 'Luyện thi chứng chỉ Tất cả'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new LuyenthiAllController();
  