let mates = 0;
let mateContador = document.getElementById("mateContador").value = mates;


function sumarMates(){
    mates++
    document.getElementById("mateContador").innerHTML = mates
}

let medialunaContador = document.getElementById("medialunaContador").value = 0;
let medialunas = document.getElementById("medialuna");
medialunas.addEventListener("click", () => {
    if(mates < 20){
        alert("No te alcanza")
    }
    medialunaContador++
    console.log(medialunaContador);
})


// restarle el precio de la medialuna a mates
// multiplicar el precio de la medialuna con la compra
// contador por segundo con la compra de una medialuna x cantidad de medialunas 
// localStorage
// dark mode



