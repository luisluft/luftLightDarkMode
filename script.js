let currentTheme = localStorage.getItem("theme");
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function setImageMode(color) {
  image1.src = `img-luft/undraw_Outdoor_adventure_${color}.svg`;
  image2.src = `img-luft/undraw_Group_selfie_${color}.svg`;
  image3.src = `img-luft/undraw_Street_food_${color}.svg`;
}

function toggleMode(mode) {
  let isDark;
  if (mode === "dark") isDark = true;
  else isDark = false;
  nav.style.backgroundColor = isDark
    ? "rgba(0 0 0 / 50%)"
    : "rgba(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgba(255 255 255 / 50%)"
    : "rgba(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark
    ? document.documentElement.setAttribute("data-theme", "dark")
    : document.documentElement.setAttribute("data-theme", "light");
  isDark ? setImageMode("dark") : setImageMode("light");
  isDark
    ? localStorage.setItem("theme", "dark")
    : localStorage.setItem("theme", "light");
}

function setLocalStorageTheme(event) {
  if (event.target.checked) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function switchTheme(event) {
  setLocalStorageTheme(event);
  currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") toggleMode("dark");
  else toggleMode("light");
}

if (currentTheme === "dark") {
  toggleMode("dark");
  toggleSwitch.checked = true;
} else toggleMode("light");

toggleSwitch.addEventListener("change", switchTheme);
