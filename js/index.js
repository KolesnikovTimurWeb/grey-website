var acc = document.getElementsByClassName("faq-text");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

   });
}

const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header-nav');

headerBurger.addEventListener('click', function () {
   headerMenu.classList.toggle("active")
   headerBurger.classList.toggle("active")
})





ScrollReveal({
   distance: '100px',
   duration: 2700,
   delay: 100,
   reset: false,
});
ScrollReveal().reveal(".global-video", { delay: 500, origin: "right", interval: 200 });
ScrollReveal().reveal(".global-text h1", { delay: 300, origin: "left" });
ScrollReveal().reveal(".global-text h2", { delay: 400, origin: "left"  });
ScrollReveal().reveal(".global-text", { delay: 500, origin: "left"  });
ScrollReveal().reveal(".text-benefits", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".steps-text, .blog-text, .faq-h2", { delay: 400, origin: "bottom" });
ScrollReveal().reveal(".benefit-item , .faq-item", { delay: 400, origin: "right" ,interval: 200 });
ScrollReveal().reveal(".benefit-item , .faq-item", { delay: 400, origin: "bottom" ,interval: 200 });
ScrollReveal().reveal(".step-block ", { delay: 400, interval: 200, origin: "right" });
ScrollReveal().reveal(".steps-close", { delay: 600, origin: "right" });
ScrollReveal().reveal(".earn-container", { delay: 400, origin: "top" });
