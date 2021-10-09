var color1, color2, color3;

window.addEventListener("load", startup, false);

function startup() {
    color1 = document.querySelector("#color1");
    color1.addEventListener("input", updateColor1, false);
    color1.addEventListener("change", updateAllColor1, false);
    color1.select();

    color2 = document.querySelector("#color2");
    color2.addEventListener("input", updateColor2, false);
    color2.addEventListener("change", updateAllColor2, false);
    color2.select();

    color3 = document.querySelector("#color3");
    color3.addEventListener("input", updateColor3, false);
    color3.addEventListener("change", updateAllColor3, false);
    color3.select();
}

function updateColor1(event) {
    document.documentElement.style.setProperty("--asphalt", event.target.value);
}

function updateAllColor1(event) {
    document.documentElement.style.setProperty("--asphalt", event.target.value);
}

function updateColor2(event) {
    document.documentElement.style.setProperty("--concrete", event.target.value);
}

function updateAllColor2(event) {
    document.documentElement.style.setProperty("--concrete", event.target.value);
}

function updateColor3(event) {
    document.documentElement.style.setProperty("--darkconcrete", event.target.value);
}

function updateAllColor3(event) {
    document.documentElement.style.setProperty("--darkconcrete", event.target.value);
}
