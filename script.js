$(document).ready(function () {
  // nav links
  $(".links a").on("click", function () {
    $(this)
      .addClass("active")
      .parents()
      .siblings()
      .find("a")
      .removeClass("active");
    $(".r-side").removeClass("back");
  });
  //Toggle Button
  $(".toggle").on("click", function () {
    $(".r-side").toggleClass("back");
  });
  // Card activate
  $("#my-taps li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var myID = $(this).attr("id");
    $(".Category .divtaps").hide(500);
    $("#" + myID + "-content").fadeIn(500);
  });
  // Scroll to top button
  var btn = $("#btn-top");
  $(window).on("scroll", function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 500) {
      btn.fadeIn(800);
    } else {
      btn.fadeOut(800);
    }
  });
  // Click btn to scroll to top
  $("#btn-top").on("click", function () {
    $("html , body").animate({ scrollTop: 0 }, 300);
  });
  // Box Start Color
  $("#box #star").on("click", function () {
    $(this).toggleClass("star-color");
  });
  // Taps Color
  $(".tab").on("click",function(){
    $(this).css("color","black");
    let targetColor = $(this).data("color");
    $(this).css("color",targetColor).parents().siblings().find(".tab").css("color","black");
  });

  // Start Count Down 
// Set the date and time for the countdown (YYYY-MM-DDTHH:MM:SS)
var countDownDate = new Date("2028-04-30T23:59:59").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Find the time difference between now and the countdown date
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
// End Count Down


// Dishes Carousel
$(".owl-carousel-1").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel-2").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// Testimonial Swiper 
var swiper = new Swiper(".mySwiper-1", {
  slidesPerView: 5, // عدد العناصر الظاهرة في الشاشة
  centeredSlides: true, // تفعيل تمركز العنصر النشط
  spaceBetween: 30, // المسافة بين الصور
  loop: true, // جعل السلايدر يدور باستمرار ولا يتوقف عند النهاية
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // لضمان التجاوب مع شاشات الموبايل
  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 3, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 30 },
  },
});

/* Deal Swiper */
var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 1.5, // عدد العناصر الظاهرة في الشاشة
  centeredSlides: true, // تفعيل تمركز العنصر النشط
  spaceBetween: 30, // المسافة بين الصور
  loop: true, // جعل السلايدر يدور باستمرار ولا يتوقف عند النهاية
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  // لضمان التجاوب مع شاشات الموبايل
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 1, spaceBetween: 30 },
    1024: { slidesPerView: 2, spaceBetween: 30 },
  },
});

// Rate Swiper 
var swiper = new Swiper(".mySwiper-3", {
  slidesPerView: 1, // عدد العناصر الظاهرة في الشاشة
  centeredSlides: true, // تفعيل تمركز العنصر النشط
  spaceBetween: 30, // المسافة بين الصور
  loop: true, // جعل السلايدر يدور باستمرار ولا يتوقف عند النهاية
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  // لضمان التجاوب مع شاشات الموبايل
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 1, spaceBetween: 30 },
    1024: { slidesPerView: 1, spaceBetween: 30 },
  },
});

});



