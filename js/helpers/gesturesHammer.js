// Deslizar para dispositivos moviles

delete Hammer.defaults.cssProps.userSelect;
const APP = document.querySelector('#body');
const hammerjs = new Hammer(APP);

//Activa el Menú cuando se desliza hacia la izquierda y lo desactiva cuando se desliza hacia la derecha

hammerjs.on("panleft panright", (ev) => {
    if (ev.pointerType === "touch") {
        const windowWidth = window.screen.width;
        const distance = Math.floor(ev.distance) >= 50;
        if (ev.type === "panleft" && ev.center.x > windowWidth - 100 && distance) {
            modalNewTask.classList.add("active");
        }
        if (ev.type === "panright" && distance) {
            modalNewTask.classList.remove("active");
        }
    }
});