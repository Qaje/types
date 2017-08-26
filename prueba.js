function holamundo(nombre) {
    return "Hola Mundo soy : " + nombre;
}
//var nombre="JAvier Q";
var nombre = 'JAvier Q';
var resultado = holamundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//Varibles y tipos
var nombretwo = ["nombretwo"];
var nombre = "JAvier";
var edad = 5;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
nombre = "nombre12";
edad = 11;
etiqueta.innerHTML = nombre + " - " + edad + " - " + programador;
alert("HOla Mundo Alert!!!!");
//SECTION 2
var numero = 44;
// numero = "Hola mundo que tal";
// numero = true;
console.log(numero);
//diferencia entre led(solo bloque) y var(variable local)
var a = 7;
var b = 12;
if (a == 7) {
    var a_1 = 4;
    var b = 1;
    console.log("dentro el if:" + a_1 + " - " + b);
}
console.log("fuera el if:" + a + " - " + b);
