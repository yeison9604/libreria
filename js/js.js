/*let km = Number(prompt("Ingrese los km recorridos"))

function factura(cankm){

    let kma = 0, constkm = 0, total = 0

    if(cankm > 300){
        kma = cankm - 300
        constkm = kma * 15000
        total = constkm + 300000

    }else{
        total = 300000
    }
}
console.log( "Km: " + cankm)
console.log("Kma: " + kma)
console.log("Costo kma: " + constkm)
console.log("total a pagar: " + total)

factura(km)
*/


/*
crear una funcion que reciba como parametro nombre, estrato, nacionalidad de un usuario, si el usuario es colombiano 
y pertenece a los estratos 1, 2 0 3, decirle, nombre; tiene derecho a subsidio, de lo contrario decirle nombre; usted no tiene derecho a subsidio


*/

/*let nom = prompt("ingrese su nombre: ")
let estrato = Number(prompt("Ingrese el estrato"))
let natio = prompt("Ingrese su nacionalidad")

function me_fui(nom, estrato, natio){
    if(estrato <= 3 && natio == "colombiano"){
        alert("señor@: " + nom + " Usted tiene derecho a subsidio")
    }else{
        alert("Señor@: " + nom + " Usted no tiene derecho a subsidio")
    }
}

console.log(me_fui(nom, estrato, natio))
*/

/*let t = document.getElementById("titulo");
let botton = document.querySelector("button");

function saludar(){
    let nombre = document.getElementById("Nombre").value;
    alert("Hola");
    t.innerHTML = "Bienvenido";
}

//botton.onclick = saludar;

botton.addEventListener("click", saludar);
*/

/*solicitar un numero y mostrar por consola la tabla de multiplicar de ese numero al dar al numero    

let botton = document.querySelector("button");

function tablas(){
    let numero = document.getElementById("nombre").value;
    for(var i = numero; i >= 1; i--){
        document.write(`Tablas del ${i} <br>`)
    for(var j = 1; j <=10; j++){
        document.write(`${i} * ${j} = ` + i*j + "<br>");
    }
}
}


botton.addEventListener("click", tablas);

*/

