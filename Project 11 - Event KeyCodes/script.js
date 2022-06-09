const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
    <div class="key">
            <p>${event.key === " " ? "Space" : event.key}</p>
            <small>event.key</small>
        </div>
        <div class="key">
            <p>${event.keyCode}</p>
            <small>event.keyCode</small>
        </div>
        <div class="key">
            <p>${event.code}</p>
            <small>event.code</small>
        </div>`;
});
