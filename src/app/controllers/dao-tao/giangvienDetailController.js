class GiangVienDetailController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/giang-vien/chi-tiet", {title : 'Chi tiết Giảng viên'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new GiangVienDetailController();
  