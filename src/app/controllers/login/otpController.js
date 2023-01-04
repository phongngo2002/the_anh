class OptController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dang-nhap/otp", {title : 'Nhập OPT'});
  }
}

module.exports = new OptController();
