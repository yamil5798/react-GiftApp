
export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=9P8iAsBnP9uclp1EQxbX1nTfJhtIE3J3&q=${category}&limit=10`
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gif = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    console.log('Resultado',gif);

    return gif;
  
  }