function showText() {
  var x = document.getElementById("btntest");
  if (x.style.display === "none") {
    x.style.display = "block";
    x.name = "Show";
  } else {
    x.style.display = "none";
    x.name = "Hide";
  }
}
