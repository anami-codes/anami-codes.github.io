function stars() {
  let e = document.createElement("div");
  e.setAttribute("class", "star");
  document.getElementById('starfall').appendChild(e);
  e.style.left = Math.random() * + innerWidth + "px";

  let size = (Math.random() * 1.5) + 1;
  let duration = Math.random() * 2;

  e.style.fontSize = size + "rem";
  e.style.animationDuration = 5 + duration + "s";
  setTimeout(function () {
    document.getElementById('starfall').removeChild(e);
  }, 10000);
}

setInterval(function () {
  stars();
}, 30);