var calc = document.getElementById('calculator-modal');
var secCam = document.getElementById('security-camera-modal');
var mesonetStat = document.getElementById('mesonet-statistics-modal');
var whiteShirts = document.getElementById('white-shirts-modal');
var lifeInBtw = document.getElementById('life-in-between-modal');
var babyDriver = document.getElementById('baby-driver-modal');
var body = document.getElementById('body');

var all = [calc, secCam, mesonetStat, whiteShirts, lifeInBtw, babyDriver];

var span = document.getElementsByClassName("close")[0];

function clickedCalc() {
  calc.style.display = "block";
  body.style.cursor = "pointer";
}

function clickedSecCam() {
  secCam.style.display = "block";
  body.style.cursor = "pointer";
}

function clickedMesonetStat() {
  mesonetStat.style.display = "block";
  body.style.cursor = "pointer";
}

function clickedWhiteShirts() {
  whiteShirts.style.display = "block";
  body.style.cursor = "pointer";
}

function clickedLifeInBtw() {
  lifeInBtw.style.display = "block";
  body.style.cursor = "pointer";
}

function clickedBabyDriver() {
  babyDriver.style.display = "block";
  body.style.cursor = "pointer";
}

span.onclick = function() {
  for(var i = 0; i < all.length; i++)
    all[i].style.display = "none";
  body.style.cursor = "default";
}

window.onclick = function(event) {
  if (all.includes(event.target))
  {
    for(var i = 0; i < all.length; i++)
      all[i].style.display = "none";
    body.style.cursor = "default";
  }
}
