const bttnChange = document.querySelector(".change");
const body = document.querySelector("body");

bttnChange.addEventListener("click", function () {
    const color = document.querySelector(".color").value;
    modification(color);

});

function modification(color) {
    body.style.backgroundColor = color;
}