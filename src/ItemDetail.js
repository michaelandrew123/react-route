import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom'

function ItemDetail( {match} ) {

    useEffect(() => {
        fetchItem()
 
    }, [])

    const [item, setItem] = useState({

        images: {}
    })
    const fetchItem = async () => {
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json()
        

        setItem(item.data.item)
        console.log(item.data.item); 
        

    };
  return (
    <div>
        <h1> {item.name}</h1>
        <img src={item.images.information} alt="" />
    </div>
  );
}

export default ItemDetail;
