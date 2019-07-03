import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Shop = (props)=>{
    

const [item, setItem] = useState("");


useEffect( ()=>{getItems()} ,[]);


const getItems = async ()=>{
    

    const types = await fetch("http://localhost/wp-json/wp/v2/types");
    const obj = await types.json();
       
    const mass = Object.keys(obj);
    
    const processed = mass.map( (e,i,m)=>{ return (<Link to={`/item/${e}`}><p key={i}>{e}</p></Link>) } )
    

    setItem( processed );

}


    return (
        <>
            <h1>Shop page</h1> 
            {item}
        </>
    )
}

export default Shop;