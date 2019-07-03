import React, {useEffect, useState} from 'react';

const Shop = (props)=>{

const [item, setItem] = useState("");


useEffect( ()=>{getItems()} ,[]);

const getItems = async ()=>{
    

    const types = await fetch("http://localhost/wp-json/wp/v2/types");
    const obj = await types.json();
       
    const mass = Object.keys(obj);
    
    const processed = mass.map( (e, i, m)=>{ return <p key={i}>{e}</p> }   );
    //console.log(processed);

    //const processed = mass.map( (e)=>{ <p>{e}}</p>  } );

    setItem( processed );

}


    return (
        <>
            <h1>Shop page</h1> 
            <h1>{item}</h1>
        </>
    )
}

export default Shop;