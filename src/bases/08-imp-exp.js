// import { heroes } from './data/heroes.js';
// import { heroes } from './data/heroes.js';} from './data/heroes.js'
// import {heroes} from './data/heroes.js'

// import { heroes } from './data/heroes';



//Nota, la primera importacion es la de default, 
// y las que van dentro de las llaves son las demás.
// import heroes, {owners } from "../data/heroes";
import heroes from "../data/heroes";

// console.log(heroes);

export const getHeroeById = (id) => heroes.find((x) => x.id === id);



// console.log(getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner == owner);


// console.log(getHeroesByOwner('DC'));

// console.log(getHeroesByOwner('Marvel'));

// console.log(owners);