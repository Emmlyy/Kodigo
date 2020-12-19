const btn= document.getElementById('btnValidar');
const returnBttn = document.getElementById('comeback');
const taa = document.querySelector('#tarjeta');
const principal = document.getElementById('principal');
const error = document.getElementById('part');
const text_num = document.querySelector('#num');
const text_rec = document.querySelector('#reconocida');
const img_ok = document.getElementById('img-acierto');
const img_error = document.getElementById('img-error');

principal.style.display = "block";
error.style.display= "none";

function validaNumericos(event) {//solo acepta numeros
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }
     else{
        taa.classList.add("alerta");
        alert("Solo se aceptan numeros");
        return false; 
     }
}
btn.addEventListener("click", function(){
    let num=taa.value;
    console.log(num);
   if(taa.innerText==null){
       alert("el campo esta vacio");
       return 0;
   }
   else{
    let array=convertir(num);
    let suma=0;
    console.log(array);
    for(let i=0; i<=array.length-1;i++){
        if(i%2==0){
            let a=array[i]*2;
            if(a>=10){
                 a.toString().split('').forEach(c => suma += parseInt(c));///sacar cada digito de a y sumar
                //console.log(a);
            }
            else{
                suma+=a;//se suma el doble producto?
                //console.log(a);
            }
        }
        else{
            suma+=array[i];
            //console.log(array[i]);
        }
    }
    //console.log(suma);
    if(suma%10==0){
        //es valida la tarjeta
        principal.style.display = "none";
        error.style.display= "block";
        img_error.style.display= "none";
        img_ok.style.display="revert";
        text_num.innerText = num;
        text_rec.innerText = " es reconocida";

    }
    else{
        //no es valida
        principal.style.display = "none";
        error.style.display= "block";
        img_error.style.display= "revert";
        img_ok.style.display="none";
        text_num.innerText = num;
        text_rec.innerText = " NO es reconocida";
    }
   }
});

function convertir(num){
    let array=[];
    
     for(let i=(num.length)-1;i>=0; i--){
         let a=parseInt(num[i]);
         array.push(a);
     }
     
     return array;
}
 returnBttn.addEventListener('click', function(){
    principal.style.display = "block";
    error.style.display= "none";
 });


