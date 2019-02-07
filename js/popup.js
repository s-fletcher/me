var body = document.getElementById('body');
var headText = document.getElementById('header-text');

var toClose;

var span = document.getElementsByClassName("close");

function clicked(x)
{
  document.getElementById(x).style.display = "block";
  toClose = x;
  body.style.cursor = "pointer";
  body.style.overflowY = "hidden";
  body.style.paddingRight = "17px";
  headText.style.marginLeft = "-17px";
}

function modalClose()
{
  document.getElementById(toClose).style.display = "none";
  // Created to force reload the iframe so sound doesnt keep playing
  if(toClose == "white-shirts-modal")
  {
    document.getElementById("white-shirts-video").src = "";
    document.getElementById("white-shirts-video").src = "https://streamable.com/s/0eeds/qaeikq";
  }
  else if(toClose == "security-camera-modal")
  {
    document.getElementById("sec-cam-video").pause();
  }
  body.style.cursor = "auto";
  body.style.overflowY = "auto";
  body.style.paddingRight = "0px";
  headText.style.marginLeft = "0px";
}

Array.from(span).forEach(v => v.addEventListener('click', function() {
  modalClose();
}));

document.getElementById("header-text").onclick = function()
{
  modalClose();
}

window.onclick = function(event) {
  if (document.getElementById(toClose) == (event.target))
  {
    modalClose();
  }
}
