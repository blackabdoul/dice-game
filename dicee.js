function imgGen() {
  var index = Math.ceil(Math.random() * 6);
  var pic = "./images/dice" + index + ".png";
  return pic;
}

function verdict() {
  var num1 = picc1.slice(13, 14);
  var num2 = picc2.slice(13, 14);

  if (num1 > num2) {
    var winner = "Player 1 ";
    return winner + "wins";
  } else if (num2 > num1) {
    var winner = "Player 2 ";
    return winner + "wins";
  } else {
    return "Draw !";
  }
}

// For manipulation of the src attribute of img
var picc1 = imgGen();
document.querySelector(".img1").setAttribute("src", picc1);
var picc2 = imgGen();
document.querySelector(".img2").setAttribute("src", picc2);

// For the verdict
document.querySelector("h1").textContent = verdict();
