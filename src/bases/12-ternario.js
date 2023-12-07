const lActivo = true;


//let lMensaje = '';

// if(!lActivo){
//     lMensaje = 'Activo';
// }else{
//     lMensaje = 'Inactivo';

// }

// const lMensaje = (lActivo) ? 'Activo' : 'Inactivo';

// const lMensaje = (!lActivo) ? 'Activo' : null;

const lMensaje = (lActivo) && 'Activo';


console.log(lMensaje);