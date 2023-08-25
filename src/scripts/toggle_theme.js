const toggle = document.querySelector(".theme-toggle");
if (localStorage.getItem("theme") === "light") {
  document.body.classList.remove("duration-500", "transition-colors");
  document.documentElement.classList.remove("dark");
  toggle.checked = true;
  setTimeout(() => {
    document.body.classList.add("duration-500", "transition-colors");
  }, 500);
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
