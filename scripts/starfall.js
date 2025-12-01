function stars(xPos) {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  var starfall = document.getElementById('starfall');
  var minSize = 24;
  let size = minSize + (Math.random() * (1.5 * minSize));
  var margin = 1.3 * size;
  let duration = Math.random() * 2;

  starfall.appendChild(e);
  e.style.left = (xPos * (starfall.offsetWidth - margin)) + "px";
  e.style.fontSize = size + "px";
  e.style.animationDuration = 5 + duration + "s";

  setTimeout(function () {
    document.getElementById('starfall').removeChild(e);
  }, 6000);
}

var starfall = document.getElementById('starfall');
let totalSectors = Math.floor(starfall.offsetWidth/200);
if(totalSectors == 0) totalSectors = 1;
let sector = 0;
let rate = (starfall.offsetWidth/10) * 1.5;

setInterval(function () {
  totalSectors = Math.floor(starfall.offsetWidth/200);
  rate = (starfall.offsetWidth/10) * 1.5;
  
  randomPos = Math.random() * (1.0 / totalSectors);
  xPos = ((1.0 / totalSectors) * sector) + randomPos;
  stars(xPos);
  sector = (sector >= totalSectors - 1) ? 0 : sector + 1;
}, rate);