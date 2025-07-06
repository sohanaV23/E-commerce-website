// Hamburger menu toggle
const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");

if (close && open && menu) {
  close.addEventListener("click", () => {
    menu.style.display = "none";
  });
  open.addEventListener("click", () => {
    menu.style.display = "flex";
  });
}

// Search filter for products
document.getElementById("input").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll(".items");
  items.forEach(item => {
    const name = item.querySelector(".name").textContent.toLowerCase();
    if (name.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Dark mode toggle button
const darkModeBtn = document.getElementById("toggleDarkMode");
darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
