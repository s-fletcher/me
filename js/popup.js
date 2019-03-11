var body = document.getElementById('body');
var headText = document.getElementById('header-text');
document.getElementById('hacklahoma19-modal').style.display = "none"; // for optimization so game doesnt play when not loaded

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
    document.getElementById("white-shirts-video").src = "https://player.vimeo.com/video/277564748?color=ffffff&byline=0&portrait=0";
  }
  else if(toClose == "security-camera-modal")
  {
    document.getElementById("security-camera-video").src = "";
    document.getElementById("security-camera-video").src = "https://player.vimeo.com/video/316245297?color=ffffff&byline=0&portrait=0";
  }
  else if(toClose == "mesonet-statistics-modal")
  {
    document.getElementById("mesonet-statistics-video").src = "";
    document.getElementById("mesonet-statistics-video").src = "https://player.vimeo.com/video/316505386?color=ffffff&byline=0&portrait=0";
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
