function showText() {
  var x = document.getElementById("btnbox");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
