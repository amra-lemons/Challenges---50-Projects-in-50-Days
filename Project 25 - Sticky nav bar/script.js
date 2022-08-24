const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const links = document.querySelectorAll("li a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    removeCurrent();
    link.classList.add("current");
  });
});

function removeCurrent() {
  links.forEach((link) => link.classList.remove("current"));
}
