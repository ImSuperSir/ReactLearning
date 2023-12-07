const getImage = async () =>
{

    //para las operaciones asincronas,
    // se debe de usar el try catch
    try
    {
        const apiKey = 'tEvmShhCKx3ldivNkeJVpr75ZyPjpOO6';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        console.log(data.images.original.url);
        const { url: lUrl } = data.images.original;

        const lImagen = document.createElement('img');
        lImagen.src = lUrl;
        document.body.append(lImagen);

    } catch (error)
    {
        console.error(error);
    }


}


getImage();