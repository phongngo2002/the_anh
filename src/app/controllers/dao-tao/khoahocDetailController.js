class KhoahocDetailController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dao-tao/khoa-hoc/chi-tiet", {title : 'Chi tiết Khóa học'});
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new KhoahocDetailController();
