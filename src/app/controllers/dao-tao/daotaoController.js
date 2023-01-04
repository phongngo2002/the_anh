class DaotaoController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dao-tao/", {title : 'Đào tạo'});
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new DaotaoController();
