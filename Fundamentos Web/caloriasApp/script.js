const mode = document.querySelector(".bttn-mode");
let cal = 0;

mode.addEventListener("click", () => {
    document.querySelector(".main").classList.contains("black") ?
        document.querySelector(".main").classList.remove("black") :
        document.querySelector(".main").classList.add("black")
});

document.addEventListener("click", (e) => {
    let target = e.target;
    if (document.getElementById('1').contains(target)) {
        if(verificar(target)){
            cal+=100;
        }
        else{
            cal-=100;
        }
    }
    else if (document.getElementById('2').contains(target)) {
        if(verificar(target)){
            cal+=200;
        }
        else{
            cal-=200;
        }
    }
    else if (document.getElementById('3').contains(target)) {
        if(verificar(target)){
            cal+=300;
        }
        else{
            cal-=300;
        }
    }
    else if (document.getElementById('4').contains(target)) {
        if(verificar(target)){
            cal+=400;
        }
        else{
            cal-=400;
        }
    }
    show();
});

const verificar = (target) =>{
    if(target.classList.contains("select")){
        target.classList.remove("select");
        return false;
    }
    else{
        target.classList.add("select");
        return true;
    }
    
}

const show = () => {
    document.querySelector("#cal").innerHTML = cal;
};
