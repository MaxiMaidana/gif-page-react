

export const getGifs = async ( category )=>{
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=8OQDrZq7rNPZk0t2Ek5WGSO2rhBZxzs0`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        console.log(url)
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}

