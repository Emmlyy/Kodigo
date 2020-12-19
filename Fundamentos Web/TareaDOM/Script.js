
const bttnBlue = document.querySelector(".blue");
const bttnGreen = document.querySelector(".green");
const bttnRed = document.querySelector(".red");
const bttnYellow = document.querySelector(".yellow");
const main = document.querySelector("main");
const p = document.querySelector("p");

WhiteMode();


bttnBlue.addEventListener("click", function () {
    if (p.innerText.toLowerCase().includes("green") || p.innerText.toLowerCase().includes("red") || p.innerText.toLowerCase().includes("yellow") )
        {
             WhiteMode();}
   
    BlueMode();
});

bttnGreen.addEventListener("click", function () {
    if (p.innerText.toLowerCase().includes("blue") || p.innerText.toLowerCase().includes("red") || p.innerText.toLowerCase().includes("yellow")) {
        WhiteMode();
    }
    GreenMode();
});
bttnRed.addEventListener("click", function () {
    if (p.innerText.toLowerCase().includes("green") || p.innerText.toLowerCase().includes("blue") || p.innerText.toLowerCase().includes("yellow")) {
        WhiteMode();
    }
    RedMode();
});
bttnYellow.addEventListener("click", function () {
      if (p.innerText.toLowerCase().includes("green") || p.innerText.toLowerCase().includes("red") || p.innerText.toLowerCase().includes("blue") )
        {
             WhiteMode();}
    YellowMode();
});

function WhiteMode() {
    if (p.innerText.toLowerCase().includes("green")) {
        main.classList.remove("bgGreen");
    }
    else if (p.innerText.toLowerCase().includes("red")) {
        main.classList.remove("bgRed");
    }
    else if (p.innerText.toLowerCase().includes("yellow")) {
        main.classList.remove("bgYellow");
    }
    else {
        main.classList.remove("bgBlue");
    }

    main.classList.add("white");
    p.innerText = "White Mode";
    bttnBlue.classList.remove("buttonBlack");
    bttnGreen.classList.remove("buttonBlack");
    bttnRed.classList.remove("buttonBlack");
    bttnYellow.classList.remove("buttonBlack");
}

function BlueMode() {
    if (p.innerText.toLowerCase().includes("blue")) {
        main.classList.remove("bgBlue");
        WhiteMode();
        return;
    }
    main.classList.add("bgBlue");
    p.innerText = "Blue Mode";
    bttnBlue.classList.add("buttonBlack");
    
}
function GreenMode() {
    if (p.innerText.toLowerCase().includes("green")) {
        main.classList.remove("bgGreen");
        WhiteMode();
        return;
    }
    main.classList.add("bgGreen");
    p.innerText = "Green Mode";
    bttnGreen.classList.add("buttonBlack");
}
function YellowMode() {
    if (p.innerText.toLowerCase().includes("yellow")) {
        main.classList.remove("bgYellow");
        WhiteMode();
        return;
    }
    main.classList.add("bgYellow");
    p.innerText = "Yellow Mode";
    bttnYellow.classList.add("buttonBlack");
}
function RedMode() {
    if (p.innerText.toLowerCase().includes("red")) {
        main.classList.remove("bgRed");
        WhiteMode();
        return;
    }
    main.classList.add("bgRed");
    p.innerText = "Red Mode";
    bttnRed.classList.add("buttonBlack");
}