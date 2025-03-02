const collider = document.getElementById('cmd-typing')
const cursor = document.getElementById("cursor")

collider.addEventListener("focus", (event) => {
    cursor.style.opacity = 100;
    cursor.style.animationPlayState = "running";
});
collider.addEventListener("blur", (event) => {
    cursor.style.opacity = 0;
    cursor.style.animationPlayState = "paused";
});