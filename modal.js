//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  next_fs = $(this).parent().next();

  //activate next step on progressbar using the index of next_fs
  $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

  //show the next fieldset
  next_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = now * 50 + "%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          transform: "scale(" + scale + ")",
          position: "absolute",
        });
        next_fs.css({ left: left, opacity: opacity });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

$(".submit").click(function () {
  return false;
});




// Get the modal
var modal = document.getElementById("myModal");
var modal_python = document.getElementById("myModal_python");
var modal2 = document.getElementById("myModal2-close");

var modal2_video = document.getElementById("mymodel_video_close");

modal2.addEventListener('click',()=>{
   var modal2_close = document.getElementById("myModal2");
  modal2_close.style.display = "none";
})
if (window.location.pathname.includes("home.html")) {
modal2_video.addEventListener('click',()=>{
   var modal2_video_close = document.getElementById("myModal_video1");
  modal2_video_close.style.display = "none";
  document.getElementById('video_modal').load();
})
}

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-2")[0];
var span_python = document.getElementsByClassName("close-python")[0];

// When the user clicks on the button, open the modal

btn.onclick = function() {

  
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
if (window.location.pathname.includes("home.html")) {
span.onclick = function() {
  modal.style.display = "none";
}

}
span_python.onclick = function () {
  modal_python.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target==modal_python) {
    modal.style.display = "none";
    modal_python.style.display='none';
  }
}
 let first_source_child=true;
function demoOpen(id=""){

  if (id!="") {
      const modalid=id.split("|")[0];
   

    var vid_modal=document.getElementById("video_modal");
   const oldchild = vid_modal.lastChild;

    var source = document.createElement('source');   
        source.setAttribute("src", "assets/" + id.split("|")[1] + ".mp4");
       if (!first_source_child) {
         vid_modal.removeChild(oldchild); 
       }
     
       
        vid_modal.appendChild(source)
          first_source_child = false;
      
     const demoModalComponent_video = document.getElementById(modalid);
     demoModalComponent_video.style.display = "block";
   
       vid_modal.load();
       vid_modal.play();

  }else{
  
 const demoModalComponent = document.getElementById("myBtn");
 demoModalComponent.click();
  }

}





