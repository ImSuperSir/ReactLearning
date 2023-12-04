//Arreglos

const lArreglo = [1, 2, 3, 4];


//los tres puntos son el operador spread, usado para extraer la informacion

let lArreglo2 = [...lArreglo, 5];  //crea un nuevo arreglo con los valores del primer arreglo, y adicional le agrego el valor 5


const lArreglo3 = lArreglo2.map(function (pNumero)
{
  return pNumero * 3;
});

console.log(lArreglo);
console.log(lArreglo2);
console.log(lArreglo3);