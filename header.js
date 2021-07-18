$(document).ready(function () {
  $(".navbar .dropdown-item").on("click", function (e) {
    var $el = $(this).children(".dropdown-toggle");
    var $parent = $el.offsetParent(".dropdown-menu");
    $(this).parent("li").toggleClass("open");

    if (!$parent.parent().hasClass("navbar-nav")) {
      if ($parent.hasClass("show")) {
        $parent.removeClass("show");
        $el.next().removeClass("show");
        $el.next().css({ top: -999, left: -999 });
      } else {
        $parent.parent().find(".show").removeClass("show");
        $parent.addClass("show");
        $el.next().addClass("show");
        console.log($el);
        $el
          .next()
          .css({ top: $el[0].offsetTop, left: $parent.outerWidth() - 4 });
      }
      e.preventDefault();
      e.stopPropagation();
    }
  });

  $(".navbar .dropdown").on("hidden.bs.dropdown", function () {
    $(this).find("li.dropdown").removeClass("show open");
    $(this).find("ul.dropdown-menu").removeClass("show open");
  });
});


$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
    autoPlay:true
  });
});

function counter(){
 let hstudents=0;
 let interval=1;
let student_interval= setInterval(() => {
  hstudents+=20;
    $("#happy-students").text(hstudents+"+");
if (hstudents >= 10000) {
  clearInterval(student_interval);
}
  }, interval);

   let hours = 0;
   let hours_interval = setInterval(() => {
     hours += 200;
     $("#hours").text(hours+"+");
     if (hours >= 112000) {
       clearInterval(hours_interval);
     }
   }, interval);


   let cities = 0;
   let cities_interval = setInterval(() => {
     cities += 1;
     $("#cities").text(cities+"+");
     if (cities >= 500) {
       clearInterval(cities_interval);
     }
   }, interval);

   let rating = 0;
   let rating_interval = setInterval(() => {
     rating += 0.1;
     $("#rating").text(rating.toFixed(1));
     if (rating >= 4.8) {
       clearInterval(rating_interval);
     }
   }, interval);
  }
  let first=true;

      $(document).on("scroll", function () {

        if ($(this).scrollTop() >= $("#best-faculty").position().top) {
           if (first) {
        
           counter();
            first = false;
        }
      }
         
      });
  

