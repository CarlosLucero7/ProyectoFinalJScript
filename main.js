//Variables iniciales
let valorCompra = 0;
let cantidad = 0;
let cant = document.getElementById("cantidad");
let btn1 = document.getElementById("btnPK");
let btn2 = document.querySelector(".btnAuto");
let btn3 = document.getElementById("btnDM");
let btn4 = document.getElementById("btnRC");
let btn5 = document.querySelector("btnLLav")
let btn6 = document.getElementById("btnSW");
let btn7 = document.getElementById("btnRC");
let btn8 = document.getElementById("btnME");
let btn9 = document.getElementById("btnTH");
let btn10 = document.getElementById("btnMU");
let btn11 = document.getElementById("btnMP");
let btn12 = document.getElementById("btnMY");
let btn13 = document.getElementById("btnMM");
let btn14 = document.getElementById("btnSN");
let btn15 = document.getElementById("btnSCor");
let btn16 = document.getElementById("btnSHor");
let btn17 = document.getElementById("btnSJ");
let del = document.getElementById("btnDel");
let btnCompra = document.getElementById("btnC");

//Productos 
const mate = {
    precio: 750,
    stock: 10,
};
const soporteCelu = {
    precio: 500,
    stock: 10,
};
const soporteNote = {
    precio: 1500,
    stock: 10,
};
const figura = {
    precio: 800,
    stock: 10,
};


let compraActual = document.createElement("div");
compraActual.innerHTML = `<h4>El monto de su compra es: $${valorCompra}</h4>`
document.getElementById("carroCompra").appendChild(compraActual)


//Funciones de compra

const compraFPK = () =>{
    fetch("./productos.json")
        .then(resp => console.log(resp))
        
        
    



}

//const compraSC = () =>{
   // if (soporteCelu.stock > 0){
       // cantidad = cantidad + 1
       // cant.innerText = `${cantidad}`
       // valorCompra = valorCompra + soporteCelu.precio;
      //  soporteCelu.stock = soporteCelu.stock - 1;
        //console.log(valorCompra)
       // compraActual.innerHTML = `<h4>Has elegido ${cantidad} productos. El monto de su compra es: $${valorCompra}</h4>`
       // document.getElementById("carroCompra").appendChild(compraActual)
    //}else {
        //alert ("No hay mas stock del producto!")
    //}
//}
btn1.addEventListener("click",compraFPK )

const compraMate = () =>{
    if (mate.stock > 0){
        cantidad = cantidad + 1
        cant.innerText = `${cantidad}`
        valorCompra = valorCompra + mate.precio;
        mate.stock = mate.stock - 1;
        console.log(valorCompra)
        compraActual.innerHTML = `<h4>Has elegido ${cantidad} productos. El monto de su compra es: $${valorCompra}</h4>`
        document.getElementById("carroCompra").appendChild(compraActual)
    }else {
        alert ("No hay mas stock del producto!")
    }
}
btn2.addEventListener("click",compraMate)

const compraSN = () =>{
    if (soporteNote.stock > 0){
        cantidad = cantidad + 1
        cant.innerText = `${cantidad}`
        valorCompra = valorCompra + soporteNote.precio;
        soporteNote.stock = soporteNote.stock - 1;
        console.log(valorCompra)
        compraActual.innerHTML = `<h4>Has elegido ${cantidad} productos. El monto de su compra es: $${valorCompra}</h4>`
        document.getElementById("carroCompra").appendChild(compraActual)
    }else {
        alert ("No hay mas stock del producto!")
    }
}
btn3.addEventListener("click",compraSN)

const compraFig = () =>{
    if (figura.stock > 0){
        cantidad = cantidad + 1
        cant.innerText = `${cantidad}`
        valorCompra = valorCompra + figura.precio;
        figura.stock = figura.stock - 1;
        console.log(valorCompra)
        compraActual.innerHTML = `<h4>Has elegido ${cantidad} productos. El monto de su compra es: $${valorCompra}</h4>`
        document.getElementById("carroCompra").appendChild(compraActual)
    }else {
        alert ("No hay mas stock del producto!")
    }
}
btn4.addEventListener("click",compraFig)

//Funcion de cancelacion
const cancelar= () =>{
    cantidad = 0;
    cant.innerText = `${cantidad}`
    valorCompra = 0;
    compraActual.innerHTML = `<h4>Compra cancelada.`
    document.getElementById("carroCompra").appendChild(compraActual)
}
del.addEventListener("click", cancelar)

//Compras realizadas
class listaCompra{
    constructor(nombre,precio) {
        this.nombre = nombre
        this.precio = precio
    }
}

let compraRealizada = [];

const compraItem1 = () =>{
    nombre = "SoporteCelu";
    precio = 500
    let compra = new listaCompra (nombre,precio);
    compraRealizada.push(compra)
    return compraRealizada
}
btn1.addEventListener("click",compraItem1)

const compraItem2 = () =>{
    nombre = "Mate";
    precio = 750
    let compra = new listaCompra (nombre,precio);
    compraRealizada.push(compra)
    return compraRealizada
}
btn2.addEventListener("click",compraItem1)

const compraItem3 = () =>{
    categ = "soporteNote";
    precio = 1500
    let compra = new listaCompra (nombre,precio);
    compraRealizada.push(compra)
    return compraRealizada
}
btn3.addEventListener("click",compraItem1)

const compraItem4 = () =>{
    nombre = "Figura";
    precio = 800
    let compra = new listaCompra (nombre,precio);
    compraRealizada.push(compra)
    return compraRealizada
}
btn4.addEventListener("click",compraItem1)

const confirm = () =>{
    localStorage.setItem("venta", JSON.stringify(compraRealizada));
}
btnCompra.addEventListener("click",confirm)

