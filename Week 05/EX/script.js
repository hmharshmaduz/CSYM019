// function clickCircle() {
//   alert("Button Press");
//   var element = document.getElementById("circle");
//   element.style.backgroundColor = "yellow";
//   element.style.borderRadius = "10px";
// }

function myClickFunction() {
  setInterval(function () {
    var element = document.getElementById("circle");
    var offLeft = element.offsetLeft;
    console.log(offLeft);
    element.style.left = offLeft - 10 + "px";
    // var opacityVal = parseFloat(element.style.opacity);
    // element.style.opacity = opacityVal - 0.1;
    
  }, 100);

  //   //alert("Button Press");
  //   var element = document.getElementById("circle");
  //   element.style.backgroundColor = "yellow";
  //   element.style.borderRadius = "10px";
  //   var opacityVal = parseFloat(element.style.opacity);
  //   element.style.opacity = opacityVal + 0.1;
}

function myLoadFunction() {
  var element = document.getElementById("circle");
  element.addEventListener("click", myClickFunction);
  var element = document.getElementById("circle");
  element.style.opacity = "1";
}
document.addEventListener("DOMContentLoaded", myLoadFunction);
