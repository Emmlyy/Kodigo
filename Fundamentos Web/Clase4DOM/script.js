const letters = document.querySelectorAll(".letter");
const len = letters.length;
let i;

document.addEventListener("keypress", function (e) {
    for (i = 0; i < len; i++) {
        if (letters[i].textContent.toLowerCase().charCodeAt(0) === e.charCode) {
            letters[i].classList.add("press-letter");
            /*  setTimeout(function () {
                 letters[i].classList.remove("press-letter");
             }, 150) */
            setTimeout(function () {
                quitar();
            }, 150);
            break;
        }
    }
});

function quitar() {
    letters[i].classList.remove("press-letter");
}