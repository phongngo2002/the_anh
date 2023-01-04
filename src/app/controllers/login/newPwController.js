class NewPwController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dang-nhap/new_pw", {title : 'Mật khẩu mới'});
  }
}

module.exports = new NewPwController();
