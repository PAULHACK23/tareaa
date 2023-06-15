//1
var nombre = "Matias";

var apellido = "Rodriguez";

var trabajo = "desarrollador";

var edad = "25 años";

console.log("hola soy " + nombre + " de apellido " + apellido + " trabajo de " + trabajo  + " y tengo " + edad  );

//2
var edad = prompt ("Ingrese su edad");

if(edad >=25 && edad <=25){
   alert("El usuario tiene 25 años")
} else{ 
   alert("El usuario no coincide con la edad ingresada")
};
//4

var suma = 100
suma = suma + 16
console.log (suma);

//5
function esPar(numero) 
{ 
  return (numero % 2) == 0; 
} 

function esPar(num) {
if(num % 2 === 0) {
return true; // es par
}
else {
return false; // es impar
}
}


console.log(esPar(4)); // devuelve true por que 4 es par
console.log(esPar(5)); // devuelve false por que 5 es impar

//8
function sumaDeNumeros(){
     let acumulador = 0;
     for (let num = 1; num <=100; num++){
        acumulador += num;
     }
return acumulador;
}
console.log (sumaDeNumeros());

//9

let numeros = [4,8,2,11,6,7];

console.log(numeros);
// 10 

var texto = "hola soy Paul";
var textoArray = texto.split("");
console.log(textoArray);