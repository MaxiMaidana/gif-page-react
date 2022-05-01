import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ({category}) => {
    console.log(`custom hook ${category}`)

    
    const [images, setImages] = useState([]);


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(()=>{
        getGifs(category).then(
            imgs=> {
                console.log(imgs)
                    setState({
                        data:imgs,
                        loading: false
                    })
                setImages(imgs)
            }
        );
    });


    return state;
} 