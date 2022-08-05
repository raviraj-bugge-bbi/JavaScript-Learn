'use strict';

document.addEventListener('DOMContentLoaded', placeColor);

function placeColor() {
  document.getElementById("Empty-box").addEventListener('click', fillColor);

  function fillColor(e) {
    if (e.target.className === 'box') {
      e.target.style.backgroundColor = document.getElementById("color-picker-btn").value;
    }
  }
}

function darkMode() {
  let flag = localStorage.getItem('flag');
  if (flag == 0) {
    document.getElementById("main-body").style.backgroundColor = "#38444D";
    document.getElementById("main-body").style.color = "#DDDDDD";
    document.getElementById("dbtn").value = "Light Mode";
    localStorage.setItem('flag', '1');
  } else {
    document.getElementById("main-body").style.backgroundColor = "#E7E9EB";
    document.getElementById("main-body").style.color = "#DDDDDD";
    document.getElementById("dbtn").value = "Dark Mode";
    localStorage.setItem('flag', '0');
  }
}

function clearColor() {
  const list = document.querySelectorAll(".box");
  for (let x = 0; x < list.length; x++) {
    list[x].style.backgroundColor = "white";
  }
}