class LoginController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dang-nhap/login", {title : 'Đăng nhập'});
  }
}

module.exports = new LoginController();
