document.getElementById('cow').onclick=cowMoves;
document.getElementById('pig').onclick=pigMoves;
document.getElementById('dog').onclick=dogMoves;
document.getElementById('chicken').onclick=chickenMoves;
document.getElementById('goat').onclick=goatMoves;
document.getElementById('sheep').onclick=sheepMoves;
document.getElementById('mouse').onclick=mouseMoves;
document.getElementById('rooster').onclick=roosterMoves;
document.getElementById('horse').onclick=horseMoves;
document.getElementById('ducky').onclick=duckyMoves;

function cowMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  cow.style.top = x + 'px';
  cow.style.left = y + 'px';
};

function pigMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  pig.style.top = x + 'px';
  pig.style.left = y + 'px';
};
function dogMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  dog.style.top = x + 'px';
  dog.style.left = y + 'px';
};

function chickenMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  chicken.style.top = x + 'px';
  chicken.style.left = y + 'px';
};
function goatMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  goat.style.top = x + 'px';
  goat.style.left = y + 'px';
};

function sheepMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  sheep.style.top = x + 'px';
  sheep.style.left = y + 'px';
};
function mouseMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  mouse.style.top = x + 'px';
  mouse.style.left = y + 'px';
};

function roosterMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  rooster.style.top = x + 'px';
  rooster.style.left = y + 'px';
};
function horseMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  horse.style.top = x + 'px';
  horse.style.left = y + 'px';
};

function duckyMoves(){
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  ducky.style.top = x + 'px';
  ducky.style.left = y + 'px';
};
window.addEventListener('onclick', function(e)){
  const audio = document.querySelector(`audio[data-key="${e.onclick}"]`);
  console.log(audio);
});
}
