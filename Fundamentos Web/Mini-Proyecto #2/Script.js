

window.addEventListener("load", () => {
    const imgs = document.querySelectorAll("img");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const p = document.getElementById("texto");
    let indice = 0;
    show(indice);

        prev.addEventListener("click", () => {
        indice--;
        show(indice);
         })
        next.addEventListener("click", () => {
        indice++;
        show(indice);
        })



    function show(int) {
        

        for (i = 0; i < imgs.length; i++) {

            (i == int) ? imgs[int].style.display = "block" : imgs[i].style.display = "none";

        }

        (int != 0) ? prev.style.display = "block" : prev.style.display = "none";

        (int == imgs.length - 1) ? next.style.display = "none" : next.style.display = "block";

        p.innerText = String(int+1);
    }

   
})