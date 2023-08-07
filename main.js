'use strict';

// from https://codepen.io/tmrDevelops/pen/vOPZBv

var c = document.getElementById('canv');
var $ = c.getContext('2d');

var col = function(x, y, g) {
  $.fillStyle = "rgb(0," + g + ",0)";
  $.fillRect(x, y, 1,1);
}

var G = function(x, y, t) {
  return( (Math.floor(192 + 64*Math.sin( 5*Math.sin(t/9) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) +Math.floor(140 + 64*Math.cos( (x*x-y*y)/300 + t )) ))/2);
}

var t = 0;
var x, y;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, G(x,y,t));
    }
  }
  t = t + 0.03;
  window.requestAnimationFrame(run);
}

run();





