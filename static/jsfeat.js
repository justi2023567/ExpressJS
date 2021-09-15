function showText() {
  var x = document.getElementById("btnbox");
  if (x.style.display === "none") {
    x.style.display = "block";
    toggleBtn();
  } else {
    x.style.display = "none";
    toggleBtn();
  }
}
function toggleBtn() {
  var btn = document.getElementById("btn");
  if (btn.value === "Hide") {
    btn.value = "Show";
  } else {
    btn.value = "Show";
  }
}
