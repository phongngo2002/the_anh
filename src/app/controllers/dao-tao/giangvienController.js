class GiangVienController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/giang-vien", {title : 'Giảng viên'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new GiangVienController();
  