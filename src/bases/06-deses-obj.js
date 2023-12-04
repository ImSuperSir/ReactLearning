//Destructuracion

const lPErsona = {
  nombre : 'Lauro',
  edad : 45,
  clave : 'estaeslaclave'
};

// const { edad, nombre} = lPErsona;

// console.log(nombre, edad);

// const retornaPersona = (pUsuario) => {
//   const {nombre} = pUsuario;

//   console.log(nombre);
// }

// retornaPersona(lPErsona);

// parte mejorada, se recibe como argumento el objeto y se desestructura
// const retornaPersona = ({nombre, edad, titulo='Ingeniero'}) => {
//     console.log(nombre, edad, titulo);
// }

// retornaPersona(lPErsona);


/// Esta es la tercera parte
const userContext= ({nombre,clave, edad, titulo='Ingeniero'}) => {
  return {
    nombreClave : clave,
    anios : edad,
    profesion : titulo,
    ltdlng: {
      lat: 14.22,
      lng: 45.2
    }
  };
}

// const lAvenger = useContexts(lPErsona);
// console.log(nombreClave);
const {nombreClave, profesion, ltdlng:{lat}} = userContext(lPErsona);

console.log(nombreClave, profesion, lat);

