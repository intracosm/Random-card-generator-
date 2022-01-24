/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let randomNumber = Math.floor(Math.random() * 12);

  let randomSuit = Math.floor(Math.random() * 4);

  let suits = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  document.querySelector(".suit").innerHTML = suits[randomSuit];
  document.querySelector(".num").innerHTML = numbers[randomNumber];
  document.querySelector(".suit-upsidedown").innerHTML = suits[randomSuit];

  if (suits[randomSuit] == "&#9829;" || suits[randomSuit] == "&#9830;") {
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".suit-upsidedown").style.color = "red";
    document.querySelector(".num").style.color = "red";
  } else {
    document.querySelector(".suit").style.color = "black";
    document.querySelector(".suit-upsidedown").style.color = "black";
    document.querySelector(".num").style.color = "black";
  }
};
