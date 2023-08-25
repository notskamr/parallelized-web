const toggle = document.querySelector(".theme-toggle");
if (localStorage.getItem("theme") === "light") {
  toggle.checked = true;
} else {
  toggle.checked = false;
}

toggle.addEventListener("change", (e) => {
  if (toggle.checked) {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
});
