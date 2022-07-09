const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 1200);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1657286515739-d66711d3fce7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80 alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit, amet";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus eius est minus dolorum necessitatibus dolor omnis deleniti eligendi";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/21.jpg" alt="">';
  name.innerHTML = "Jane Doe";
  date.innerHTML = "Oct 08, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
