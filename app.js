let mates = 0;

let inventario = [0,0,0];
let matesProduce = [1,2,5];
let precioProducto = [100, 500, 2000];

function clic(){
    mates++;
}

function producir(){
    for(contador = 0; contador < inventario.length; contador++){
     mates += inventario[contador] * matesProduce[contador];   
    }
}

function comprar(objeto){
    if(mates >= precioProducto[objeto]){
        inventario[objeto]++;
        mates -= precioProducto[objeto];
    }else{
        alert("No cebaste suficientes mates.")
    }

}

function render(){
    document.getElementById("contador").innerHTML = mates;
    document.getElementById("inventario").innerHTML = 
    `Cursores: ${inventario[0]}<br>
     Medialunas: ${inventario[1]}<br>
     Pizza: ${inventario[2]}<br>
    `;
}


let FPSProduce = 1;

setInterval(function(){
    producir();
},1000/FPSProduce);

let FPS = 30;

setInterval(function(){
    render();
},1000/FPS);