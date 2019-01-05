var canvas = document.getElementById('stars');
canvas.width = window.innerWidth;
canvas.height = 800;
var lines = 0;

var c = canvas.getContext('2d');

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
});

function Circle(x, y, dx, dy, radius, radiusMax, color)
{
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.dr = .01;
  this.radius = radius;
  this.radiusMax = radiusMax;
  this.color = color;
  this.lineWidth = (Math.random() * .2) + .05;

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
    this.x += this.dx;
    this.y += this.dy;
    if(this.radius < this.radiusMax)
    {
      this.radius += this.dr;
    }


    this.draw();
  }
}

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
}

animate();
