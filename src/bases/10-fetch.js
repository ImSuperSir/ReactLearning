const apiKey = 'tEvmShhCKx3ldivNkeJVpr75ZyPjpOO6';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);


//las promesas pueden encadenarse
peticion
    .then(resp => resp.json())  //esto es una respuesta implicita de la promesa, que es una promesa, y se puede encadenar
    .then( ({data}) => {
        //console.log(data.images.original.url);
        const { url } = data.images.original; //desestructuracion
        // console.log(data.images.original)
        // console.log(url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })   
    .catch((err) =>
    {
        console.warn(err);
    })