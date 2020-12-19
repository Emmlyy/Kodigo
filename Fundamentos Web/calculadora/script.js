const numbers = document.getElementsByClassName("number");
const input = document.getElementById("operations");
const btns = document.getElementsByClassName("btn");
let operBand, operDot, operEqual;


reset();

Array.from(btns).forEach(function (btn) {
    btn.addEventListener("click", function () {
        pressButton(btn);
    })
})


//Main Function
function pressButton(element) {
    if (element.id === 'ac') allClear();
    else if (element.id === 'c') clear();
    else if (element.id === '=') equals();
    else if (element.className.includes("operator") && !operBand) btnOperator(element);
    else input.value += element.id;

}

function allClear() {
    return input.value = '';
}

function clear() {
    let iv = input.value;
    return input.value = (iv.substr(0, input.textLength - 1));
}

function btnOperator(element) {
    operBand = true;
    input.value += element.id;
    let iv = input.value.substr(input.textLength - 2, 1);
    if (iv === '+' || iv === '-' || iv === '*' || iv === '/' || iv === '.') clear();
    operBand = false;
}

function reset() {
    operBand = false;
    operDot = false;
    //En clase no se ocupó por tiempo. Tratar de implementar por ejemplo: .1 + .2 = 0.3 
    operEqual = false;
    // En clase no se ocupó por tiempo. Tratar de implementar que luego dar click a igual y arroje el resultado, al apretar un número, el valor del input quede en blanco para solo mostrar la nueva operación.
}

function equals() {
    if (input.value !== '') {
        input.value = parseFloat(eval(input.value))
    }
}