$(document).ready(function () {

  AOS.init();

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
  // تحديد تاريخ النهاية
    var countDownDate = new Date("2028-04-30T23:59:59").getTime();

    // تحديث العداد كل ثانية واحدة
    var x = setInterval(function() {

        // الحصول على الوقت الحالي
        var now = new Date().getTime();

        // حساب الفرق بين الوقت الحالي وتاريخ النهاية
        var distance = countDownDate - now;

        // حساب الأيام والساعات والدقائق والثواني
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // التحقق من وجود العناصر في الصفحة قبل محاولة تعديلها لمنع خطأ الـ Null
        var daysEl = document.getElementById("days");
        var hoursEl = document.getElementById("hours");
        var minutesEl = document.getElementById("minutes");
        var secondsEl = document.getElementById("seconds");

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.innerHTML = days;
            hoursEl.innerHTML = hours;
            minutesEl.innerHTML = minutes;
            secondsEl.innerHTML = seconds;
        }

        // إذا انتهى الوقت
        if (distance < 0) {
            clearInterval(x);
            var countdownEl = document.getElementById("countdown");
            if (countdownEl) {
                countdownEl.innerHTML = "EXPIRED";
            }
        }
    }, 1000);
  // End Count Down

});



