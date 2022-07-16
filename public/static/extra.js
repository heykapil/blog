var canvas = document.querySelector('canvas');
var cw = canvas.width = window.innerWidth;
var ch = canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
window.addEventListener('click', function(e){
  var cX = e.clientX;
  var cY = e.clientY;
  if (e.button === 0){
  init(cX, cY);
  }

});
var colorArr = ['rgba(243,82,92,0.8)','rgba(0,103,76,0.5)','rgba(149,178,58,0.5)','rgba(252,206,68,0.8)','rgba(245,127,79,0.5)'];

function Circle(x, y, radius, index){
  this.x = x;
  this.y = y;
  this.dx = Math.random()*10-5;
  this.dy = Math.random()*10-5;
  this.gravity = 0;
  this.radius = radius;
  
  this.id = index;
  this.life = 0;
  this.maxLife = Math.random()*(1000-400)+400;
  this.color = colorArr[Math.floor(Math.random()*colorArr.length)];
 
  
  this.draw = () => {
   ctx.beginPath();
   ctx.arc(this.x,this.y,this.radius,0,Math.PI*2, false);
   ctx.strokeStyle = this.color;
   ctx.lineWidth = 4;
   ctx.stroke(); 
  }
  
  this.update = () => {
    if (this.x + this.radius > cw || this.x - this.radius < 0){
    this.dx = -this.dx;
    }
    if (this.y + this.radius > ch || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.life++;
    if (this.life >= this.maxLife){
      delete circleArr[this.id];
    }
    this.x+=this.dx;
    this.y+=this.dy;
    this.dy += this.gravity;
    this.draw();
    
  }
}

window.addEventListener('resize', function(){
 cw = canvas.width = innerWidth;
  ch = canvas.height = innerHeight;
  
  init();
})



var circleArr;

var circleNum = 150;

function init(x, y){
 circleArr = [];
 for (var i = 0; i < circleNum; i++){
  var radius = 5;  
  circleArr.push(new Circle(x, y, radius, i));
} 
}

function animateCircle (){
  requestAnimationFrame(animateCircle);
  ctx.clearRect(0,0,cw,ch);
   for (var i = 0; i < circleArr.length; i++){
    circleArr[i].update();
   }
}

animateCircle();