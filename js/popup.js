var body = document.getElementById('body');
var headText = document.getElementById('header-text');
console.log(body.style.overflowY);

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
  console.log(body.style.overflowY);
}

function modalClose()
{
  document.getElementById(toClose).style.display = "none";
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
