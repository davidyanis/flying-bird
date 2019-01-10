function menuButtonClicked() {
   var header = document.getElementById("header");
   var cornerIcon = document.getElementById("corner-icon");
   header.classList.toggle("fullscreen");

   if (cornerIcon.classList.contains("fa-bars")) {
        cornerIcon.classList.replace("fa-bars", "fa-times");
      }
      else{
        cornerIcon.classList.replace("fa-times", "fa-bars");
      }
}


window.onload = function () {
    setTimeout(function(){
      document.getElementById('modal').style.display = "none";}, 2000);
}

function scrollToTop() {
  window.scroll({
    top: 200,
    behavior: "smooth",
  });
}

function slideshowNext() {
  var header = document.getElementById("slideshow");
  var clickme = document.getElementById("clickme");
  header.classList.toggle("magic");

  // if (cornerIcon.classList.contains("fa-bars")) {
  //      cornerIcon.classList.replace("fa-bars", "fa-times");
  //    }
  //    else{
  //      cornerIcon.classList.replace("fa-times", "fa-bars");
  //    }
}

