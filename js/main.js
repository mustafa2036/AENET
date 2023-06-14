let navbar = document.querySelector(".navbar");
let nums = document.querySelectorAll('.counter-num .counter-nums');

window.onscroll = () => {
    if(scrollY > 10){
        navbar.classList.add("active");
    }
    else{
        navbar.classList.remove("active")
    }
}
$(document).ready(function () {
    nums.forEach(num => startCount(num) );
    function startCount(el){
        let goal = el.dataset.goal;
        let count = setInterval(()=> {
            el.textContent++;
            if(el.textContent == goal){
                clearInterval(count);
            }
        }, 10000 / goal);
    }
    $(".loader").fadeOut(4500, () => {
      $("#last_spin").fadeOut(3000, () => {
        $("body").css("overflow-y","auto")
      })
    })
});
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 900,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
  });