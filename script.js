const sunIcon = document.getElementById("sun");
const moonIcon = document.getElementById("moon");

function changeTheme() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle("dark");

  if (htmlEl.classList.contains("dark")) {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  } else {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  }
}