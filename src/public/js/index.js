// slide(jquery)
$(".slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        autoplay: false,
        arrows: false,
        dots: true,
        slidesToShow: 1,
      },
    },
  ],
});

//   tabs
function chooseTab(id) {
  var item = document.querySelectorAll(".tab-item");
  var content = document.querySelectorAll(".content");
  for (let index = 0; index < content.length; index++) {
    if (index == id) {
      content[index].classList.remove("hidden");
      item[index].classList.add("tab-active");
    } else {
      if (!content[index].classList.contains("hidden")) {
        content[index].classList.add("hidden");
      }
      if (item[index].classList.contains("tab-active")) {
        item[index].classList.remove("tab-active");
      }
    }
  }
}
// content tab show
function showContent(id) {
  var show = document.querySelectorAll(".detail-course");
  var titles = document.querySelectorAll(".title-courses");
  for (let index = 0; index < show.length; index++) {
    if (index == id) {
      show[index].classList.toggle("detail-course-active");
      titles[index].classList.toggle("title-courses-active");
    }
  }
}

// MODAL
function showModal() {
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("btn_modal");

  var span = document.getElementsByClassName("close");

  modal.style.display = "block";
  for (let index = 0; index < span.length; index++) {
    span[index].onclick = function () {
      modal.style.display = "none";
    };
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
