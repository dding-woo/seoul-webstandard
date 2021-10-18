$(function () {

  // top banner News


  var newsSwiper = new Swiper(".banner__swiper.news", {
    slidesPerView: 1,
    centeredSlides: false,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },



  });

  // top banner citizen
  var citizenSwiper = new Swiper(".banner__swiper.citizen", {
    slidesPerView: 1,
    centeredSlides: false,
    autoplay: {
      delay: 50000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  });
  // bottom slide__banner
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});

//홈페이지 로드 시 처음 클릭 되어있는 a태그에 선택됨 표시.
if ($('.division > a.on')) {
  $('.division > a.on span').text('선택 됨')
}

// 클릭 된 종류에 따라 슬라이드 변경 및 선택 됨.
$('.division > a').click(function (e) {
  e.preventDefault();
  $('.division > a.on').removeClass('on')
  $(this).addClass('on')
  var idx = $(this).index();

  $('.banner__swiper').removeClass('vis');
  $(`.banner__swiper${idx}`).addClass('vis');

  //a가 클릭됬을 때 ally(눌린 a의 인덱스) 일 때 텍스트 선택 됨

  //다른 a가 클릭 되었을 때 텍스트를 제거
  if ($('.division > a.on')) {
    $(this).siblings().find('span').text('')
    $('.division > a.on span').text('선택 됨')
  } else {
    $(this).siblings().find('span').text('')
  }
});
// 스와이퍼 정지 버튼

// function ani() {
//   newsSwiper.slideNext();
// }

// $('.controls .pause').click(function () {
//   // 재생 상태일 때 정지 버튼을 누르면 텍스트가 정지로 바뀌고 슬라이드를 정지
//   if ($(this).hasClass('pause')) {
//     $(this).removeClass('pause').text('정지')
//   } else {
//     ani()
//     $(this).addClass('pause').text('재생')

//   }

// });
// 버튼 클릭 했을 때  header로 이동
const arrowUpBtn = document.querySelector(".top__btn");

arrowUpBtn.addEventListener("click", () => {
  scrollIntoView("#header");
});


// arrowTop 버튼
document.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const header = document.querySelector("#header");
  const headerHeight = header.getBoundingClientRect().height;

  if (headerHeight > scrollY) {
    arrowUpBtn.classList.remove("active");
  }
  else {
    arrowUpBtn.classList.add("active");
  }
});
// 
function scrollIntoView(topBtn) {
  const scrollTo = document.querySelector(topBtn);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

//탭버튼
$(function () {
  $('.related__site__container .btn').on("click", function () {

    //현재 눌린 요소 다음 요소를 변수 panel에 할당한다.
    var panel = $(this).next();
    //현재 눌린 요소 다음 요소 즉, 
    //<div class="related__site__list panel panel0"> 에 panelshow토글 클래스를 추가한다.
    panel.toggleClass('panelshow')
    //.panelshow클래스 선택자의 현재눌린 요소가 아닌것은 panelshow클래스를 제거한다.
    //not('') : 현재 요소에 해당하지 않는 것 이라고 이해.
    $('.panelshow').not(panel).removeClass('panelshow');
    return false;

  })

}) //지우면안됨