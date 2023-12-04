// const saludar = function (pNombre)
// {
//   return `Hola ${pNombre}`
// };


// const saludar2 = (pNombre) =>
// {
//   return `Hola ${pNombre}`
// };


const saludar3 = (pNombre) => `Hola ${pNombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar3('Lauro Ramirez Hernandez'));
console.log(saludar4());  //Checar el detalle de los parentesis, si no los pongo devuelve la funcion, no la ejeucion de esta


const getUser = (pNombre) => ({
  uid :'asdf',
  nombre : pNombre
});

const user = getUser('Guito');
console.log(user);


// function getUsuarioActivo(nombre) {
//   return {
//     uid : 'QWERQWER',
//     userName : nombre
//   }
// };

// const usuarioActivo = getUsuarioActivo('LauritoDos');
// console.log(usuarioActivo);




const usuarioActivo = (nombre) => ({
  
    uid : 'QWERQWER',
    userName : nombre
  
});


console.log(usuarioActivo('Laurito 3'));