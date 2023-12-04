const personajes = ['lauro', 'laurito', 'Frida'];


console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [, , p3] = personajes; //con las comas me salgo una posicion

console.log(p3);  //imprime el elemento obtenido en la desestructuracion

const retornaArreglo = () => ['ABC', 123];

//esto es lo mismo que la linea anterior
// const retornaArreglo = () => {
//   return ['ABC', 123];
// } 


const arr = retornaArreglo();

console.log(arr);

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const suseStates = (valor) =>
{
  return [valor, () => { console.log(`Hola Sir ${valor}`) }];
};


// const arreglo = suseStates('lauro');
// console.log(arreglo);

// arreglo[1]();

const [nombres, setNombre] = suseStates('lopez');  //desestructuracion de un arreglo, que en este caso en particular devuelve una funcion

setNombre('lopez');  //ejecuta la funcion devuelta en la desestructuracion
console.log(nombres);  //imprime el valor devuelto en la desestructuracion