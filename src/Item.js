import React, {useEffect, useState} from 'react';

const Item = ({match})=>{
    
    const [name, setName] = useState('loading...');
    const [slug, setSlug] = useState('loading...');


    useEffect( ()=>{getItem()} ,[]);

    const getItem = async ()=>{
        const types = await fetch(`http://localhost/wp-json/wp/v2/types/${match.params.id}`);
        const obj = await types.json();

        setName(obj.name);
        setSlug(obj.slug);
    
    }


    console.log(match.params.id);
    
    return (
        <>
            <p>{name}</p>    
            <p>{slug}</p>    
        </>
    )

}

export default  Item;