class LichthiDetailController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dao-tao/lich-thi/chi-tiet", {title : 'Chi tiết Lịch thi'});
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new LichthiDetailController();
