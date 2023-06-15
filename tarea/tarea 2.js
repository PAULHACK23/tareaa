//1
var num = prompt ("Ingrese un numero");

    if(num % 2 === 0) {
    alert ("El numero es par"); // es par
    }
    else {
    alert("El numero es impar"); 
    };
//2
var num = prompt ("Ingrese un numero");

    if(num > 0 ) {
    alert ("El numero es positivo"); // es par
    }
    if(num < 0 ) {
        alert ("El numero es negativo"); // es par
        }
   
//3
var texto = "hola";
 if(texto.length <=10 );
   
//4
let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);
//5
let Array = ["Lautaro", "Lucas", "Joaquin"]
document.write(Array)
//6
const  amigos = [{
    nombre: 'Lautaro',
    edad: 20,
  }, {
    nombre: 'Lucas',
    edad: 21
  },
  {
    nombre: 'Joaquin',
    edad: 22

  },
  {
    nombre: 'Gabriel',
    edad: 23

  },

];
  
const result = amigos.reduce((acc, curr) => acc + curr.edad, 0) / amigos.length;

console.log(result);

//7
let colores =["Negro", "Blanco", "Azul", "Verde", "Gris"]
console.log(colores);
//8
let frutas=["Manzana", "Banana", "Naranja", "Mandarina", "Pera"]
document.write(frutas)
//9
function sumarNumerosPares(num){
if(num.length %2 === 0){
return num.length; // es par
}
}

console.log(sumarNumerosPares(12));