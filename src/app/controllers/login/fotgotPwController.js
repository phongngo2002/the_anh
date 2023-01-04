class ForgotFwController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dang-nhap/forgot_pw", {title : 'Quên mật khẩu'});
  }
}

module.exports = new ForgotFwController();
