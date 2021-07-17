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

function darkMode() {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
  nav.style.backgroundColor = "rgba(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgba(255 255 255 / 50%)";
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  setImageMode("dark");
}

function lightMode() {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
  nav.style.backgroundColor = "rgba(255 255 255 / 50%)";
  textBox.style.backgroundColor = "rgba(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  setImageMode("light");
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
  if (currentTheme === "dark") darkMode();
  else lightMode();
}

if (currentTheme === "dark") {
  darkMode();
  toggleSwitch.checked = true;
} else lightMode();

toggleSwitch.addEventListener("change", switchTheme);
