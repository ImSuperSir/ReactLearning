import { getHeroeById, getHeroesByOwner } from "./bases/08-imp-exp";



// const promesa = new Promise((resolve, reject) =>
// {

//   setTimeout(() =>
//   {
//     // console.log('dos segundos despues...')
//     const lHero = getHeroeById(2);
//     //console.log(lHero);
//     resolve(lHero);
//     // reject('No se pudo encontrar al heroe')
//   }, 2000);
// }); // por naturaleza son asincronas, resolve, reject es por convencionn

// promesa.then(( pHero) =>
// {
//   // console.log(pHero.owner);
//   // console.log(`Then de la promesa. ${pHero}`)
//   console.log('Heroe',pHero);
// })
// // .catch( (err) => {
// //   console.log(err);
// // });
// .catch( (err) => console.warn(err));


const getHeroByIdAsync = (id) =>
{
    return new Promise((resolve, reject) =>
    {

        setTimeout(() =>
        {
            // console.log('dos segundos despues...')
            const lHero = getHeroeById(id);

            if (lHero)
            {
                resolve(lHero);
            }
            else
            {
                reject('Este heroe se ha dado a la fuga')
            }
            //console.log(lHero);
            //resolve(lHero);
            // reject('No se pudo encontrar al heroe')
        }, 2000);
    }); // por naturaleza son asincronas, resolve, reject es por convencionn

};

getHeroByIdAsync(2)
    .then(console.log)
    // .then( heroe => console.log(heroe))

    // .catch( err => console.warn(err))
    .catch(console.warn)  // el metodo log recibe como argumento el primer argumento que reciba el caught




