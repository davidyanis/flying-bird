window.onload = function myMove(){
    var elem = document.getElementById("animate");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 800) {
        clearInterval(id);
        elem.style.left = pos + 'px'; 
      } 
      else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.right = pos + 'px'; 
      }
    }
  }

  function initSize(){
      
  }
