'use strict';

// from https://codepen.io/tmrDevelops/pen/vOPZBv

var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function(x, y, r, g) {
  $.fillStyle = `rgb(${r}, ${g}, 50)`;
  $.fillRect(x, y, 1,1);
}

// (1) = / / /
// (2) = cover screen
// (3) = waves

// (1) Math.floor(25 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100))
// (2) Math.floor(25 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300))
// (3) Math.floor(25 + 64*Math.cos( (x*x-y*y)/300 + t ))/2

var R = function(x, y, t) {
  return (
    Math.floor(-25 + 64*Math.cos( (x*x-y*y)/200 + t ))/4 +
    Math.floor(-25 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100))
  )

}

var G = function(x, y, t) {
  return (
    Math.floor(20 + 64*Math.cos( (x*x-y*y)/200 + t ))/4 +
    Math.floor(20 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100))
  )
}

var t = 0;
var x, y;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x, y, t));
    }
  }
  t = t + 0.021;
  window.requestAnimationFrame(run);
}

run();





