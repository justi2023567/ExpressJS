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

  function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }

var i = 0;
var txt = "Our team: \v Tyler Siegmund \v Ethan Shimmel \v Justin Anderson";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("test").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function myFunction() {
  alert("Haha you thoght something interesting was gonna happen!");
}
