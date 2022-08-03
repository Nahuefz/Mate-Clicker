let mates = 0;

function sumarMates(){
    actualizarMates(++mates);
}

function actualizarMates(val){
    document.getElementById("contador").innerHTML = val;
}