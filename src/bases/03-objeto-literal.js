// Esto es un objeto que tambien es llamado diccionario, ya que trabajan con llave valor

const persona = {
  nombre : 'Lauro',
  apellido : 'Ramirez',
  edad : 47,
  direccion: {
    calle: '1806 Island Av',
    ciudad : 'Vancouver'
  }
};


console.log(persona);

//notese que en la siguiente linea se usan las llaves, esto es la creacion de un objeto
console.log({persona:persona});  //el objeto con una propiedad llamada persona, el cual su valor es el objeto creado anteriormente 
console.log({persona});  //es lo mismo que la linea anterior, por eCmascript, esto se ve en la consola del browser 

// console.table({persona});
//estos objetos son de referencia

const lPersona2 = persona;


//si lo que queremos es clonarlo, es que creemos un nuevo objeto y le asignemos todas los valores/propiedades

const lOtraPersona  = { nombre : persona.nombre};
const lPersona3 = {...persona}; // usando los tres puntos se copian todas las propiedades


console.log(lOtraPersona);
console.log(lPersona3);

