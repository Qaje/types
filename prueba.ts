function holamundo(nombre){
	return "Hola Mundo soy : "+nombre;
}

//var nombre="JAvier Q";
var nombre='JAvier Q';
var resultado = holamundo(nombre);
var etiqueta = <HTMLElement> document.getElementById("container");
etiqueta.innerHTML = resultado;

//Varibles y tipos
var nombretwo:any = ["nombretwo"]
var nombre:string = "JAvier";
var edad:number = 5;
var programador:boolean = true;
var langs:Array<string> = ["PHP","JavaScript","CSS"];
nombre = "nombre12";
edad = 11;
etiqueta.innerHTML = nombre+" - "+edad+" - "+programador;

alert("HOla Mundo Alert!!!!");
//SECTION 2
var numero =44;
// numero = "Hola mundo que tal";
// numero = true;
console.log(numero);
//diferencia entre led(solo bloque) y var(variable local)
var a = 7;
var b = 12;
if(a==7){
	let a=4;
	var b=1;
  console.log("dentro el if:"+a+" - "+b);
}
console.log("fuera el if:"+a+" - "+b);
