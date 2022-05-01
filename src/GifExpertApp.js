import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
    
    // const  categories = ['dragon ball','naruto','dexter'];
    const [category, setCategories] = useState(['Dragon Ball Z']);

    // const handleAdd = ()=>{
        
    //     setCategories(cats =>[...cats, 'vaca y el pollito']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    category.map((category, i) => {
                        return <GifGrid 
                            key={category}    
                            category={category}
                        />;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;