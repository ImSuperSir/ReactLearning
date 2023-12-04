const lNombre = 'Frida';
const lApellido = 'Ramirez';

console.log(`${lNombre} 
${lApellido} 
${ 1+4}`);


// Si no utilizo un return regresaria un undefined
function getSaludo(pNombre){
  return `Hola ${pNombre}`;
}

console.log(`Esto es un texto ${getSaludo(lNombre)}`);