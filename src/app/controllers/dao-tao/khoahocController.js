class KhoahocController {
    // [Get] /news
    index(req, res) {
      res.render("partials/dao-tao/khoa-hoc", {title : 'Khóa học'});
    }
    // [GET] /news/:slug
    // show()
  }
  
  module.exports = new KhoahocController();
  