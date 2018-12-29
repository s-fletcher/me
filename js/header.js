var canvas = document.getElementById('header');
canvas.width = window.innerWidth;
canvas.height = 500;

var c = canvas.getContext('2d');

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  spawnArray();
});

function Circle(x, y, dx, dy, radius, color)
{
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.dr = .005;
  this.radius = radius;
  this.color = color;

  this.draw = function()
  {
    c.fillStyle = colors[color];
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
  }

  this.update = function()
  {
    if(this.x + this.radius > canvas.width || this.x - this.radius < 0)
    {
      this.dx = -this.dx;
    }
    if(this.y + this.radius > canvas.height || this.y - this.radius < 0)
    {
      this.dy = -this.dy;
    }
    if(this.radius > 3)
    {
      this.dr = -this.dr;
    }
    if(this.radius < 1)
    {
      this.dr = -this.dr;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.radius += this.dr;
    this.draw();
  }
}

// var colors = ['rgb(43, 45, 66)', 'rgb(141, 153, 174)', 'rgb(182, 190, 203)'];
var colors = ['rgb(233, 196, 106)', 'rgb(244, 162, 97)', 'rgb(231, 111, 81)'];
var circleArray;
function spawnArray()
{
  circleArray = [];
  for (var i = 0; i < canvas.width/3; i++) {
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() * .7) - .35;
    var dy = (Math.random() * .7) - .35;
    var radius = Math.random() * 3 + 0.01;
    var color = Math.floor(Math.random() * 3);
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
  }
}
spawnArray();

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for(var i = 0; i < circleArray.length; i++)
  {
    circleArray[i].update();
  }
}

animate();
