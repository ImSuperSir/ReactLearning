const apiKey = 'tEvmShhCKx3ldivNkeJVpr75ZyPjpOO6';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then( (resp) => {
    resp.json().then( data => {
        console.log(data)
    });
    //console.log(resp);
})
.catch( (err) => {
    console.warn(err);
})