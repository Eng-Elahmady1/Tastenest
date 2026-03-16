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

});



