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
  if (
     window.location.pathname.includes("index.html") ||
    window.location.href == "https://thevirtualguruji.com/"
   
  ) {
    $("#owl-demo").owlCarousel({
      navigation: false,
      autoPlay: true,
    });
  }
});



$(document).ready(function () {
  if ( window.location.pathname.includes("index.html") ||
    window.location.href == "https://thevirtualguruji.com/") {
        
  $("#owl-demo-home").owlCarousel({
    autoPlay:true,
    items: 1,
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
    afterAction:callback
  });
  }
});
  let landscape = document.getElementById("landscape");
  let offer = document.getElementById("offer");
  let drawback = document.getElementById("drawback");

  function callback(event) {
    landscape.pause();
    offer.pause();
    drawback.pause();
    landscape.onplaying = function (prop) {

   $("#owl-demo-home").trigger("stop.owl.autoplay");
    };
    offer.onplaying = function (prop) {
        $("#owl-demo-home").trigger("stop.owl.autoplay");
    };
    drawback.onplaying = function (prop) {
        $("#owl-demo-home").trigger("stop.owl.autoplay");
    };
    landscape.onended = function (prop) {
       
   $("#owl-demo-home").trigger("play.owl.autoplay");
    };
    offer.onended = function (prop) {
    $("#owl-demo-home").trigger("play.owl.autoplay");
    };
    drawback.onended = function (prop) {
    $("#owl-demo-home").trigger("play.owl.autoplay");
    };
   
  }



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

  
if ( window.location.pathname.includes("index.html") ||
    window.location.href == "https://thevirtualguruji.com/") {
      $(document).on("scroll", function () {

        if ($(this).scrollTop() >= $("#best-faculty").position().top) {
           if (first) {
        
           counter();
            first = false;
        }
      }
         
      });
    }
  
    let slideInterval = 8000;
    let firstVid = document.getElementById("firstVid");
    let secondVid = document.getElementById("secondVid");
$("#carouselExampleControls").on("slide.bs.carousel", function () {
 firstVid.pause();
 secondVid.pause();
});
firstVid.onplaying=function(prop) {
 
  slideInterval=false;
  stopPlayCarousel();
}
secondVid.onplaying=function(prop) {

  slideInterval=false;
  stopPlayCarousel();
}

firstVid.onended=function(prop) {
slideInterval=true;
stopPlayCarousel()
}
secondVid.onended=function(prop) {
slideInterval=true;
stopPlayCarousel()
}



function stopPlayCarousel(){
  //Event for pushed the video
  $("#carouselExampleControls").carousel({
    pause: true,
    interval: slideInterval,
  });
}


