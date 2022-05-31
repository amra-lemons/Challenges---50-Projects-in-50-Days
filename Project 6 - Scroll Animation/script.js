const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", updateCheckBoxes);

updateCheckBoxes();

function showBox(box) {
  box.classList.add("show");
}

function hideBox(box) {
  box.classList.remove("show");
}

function updateCheckBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      window.requestAnimationFrame(() => showBox(box));
    } else {
      window.requestAnimationFrame(() => hideBox(box));
    }
  });
}
