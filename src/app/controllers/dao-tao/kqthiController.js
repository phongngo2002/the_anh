class KqBaithiController {
  // [Get] /news
  index(req, res) {
    res.render("partials/dao-tao/luyen-thi/bai-thi/kq-bai-thi", {title : 'Kết quả bài thi'});
  }
  // [GET] /news/:slug
  // show()
}

module.exports = new KqBaithiController();
