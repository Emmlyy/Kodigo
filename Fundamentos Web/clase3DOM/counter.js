const mainCounter = document.querySelector(".counter_main h2");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

//contador
let num = 0;

btnDecrease.addEventListener("click", function () {
    num = decrease(num);
    mainCounter.innerText = num;
    show_number_color(num, mainCounter);
});

btnReset.addEventListener("click", function () {
    num = reset();
    mainCounter.innerText = num;
    show_number_color(num, mainCounter);
});

btnIncrease.addEventListener("click", function () {
    num = increase(num);
    mainCounter.innerText = num;
    show_number_color(num, mainCounter);
});


function decrease(numero) {
    return --numero;
}

function reset() {
    return 0;
}

function increase(numero) {
    return ++numero;
}

//show the color and number correctly
function show_number_color(num, mainCounter) {
    if (num > 0) {
        mainCounter.classList.remove('color_gray', 'color_red');
        mainCounter.classList.add('color_green');
    } else if (num < 0) {
        mainCounter.classList.remove('color_gray', 'color_green');
        mainCounter.classList.add('color_red');
    } else {
        mainCounter.classList.remove('color_red', 'color_green');
        mainCounter.classList.add('color_gray');
    }
}