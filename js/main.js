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
        }, 9000 / goal);
    }
});
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6,
    loop: true,
    autoplay: {
        delay: 1000,
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
          slidesPerView: 6,
        },
    },
  });