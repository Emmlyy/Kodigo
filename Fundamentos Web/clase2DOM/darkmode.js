rea//objetos-propiedades (nodos)
const bg = document.querySelector("body");
const header = document.querySelector("header h1");
const btn = document.querySelector("button");

//invoke function
startLight();


//javascript: Multi-Paradigma (Propio: Paradigma Orientado a Eventos)
btn.addEventListener("click", function () {
    darkMode();
});

//definition function
function startLight() {
    bg.classList.add("bg-light");
    header.classList.add("header-light");
    btn.classList.add("btn-dark");
}

function darkMode() {
    bg.classList.toggle("bg-dark");
    header.classList.toggle("header-dark");
    btn.classList.toggle("btn-light");
    if (btn.innerText.toLowerCase().includes("dark")) {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
    /*  btn.innerText.toLowerCase().includes("dark") ? btn.innerText = "Light Mode" : btn.innerText = "Dark Mode"; */
}

//operacion ternaria
//tres: tres operaciones
// (condicion) ? true : false