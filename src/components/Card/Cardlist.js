import React from 'react';
import Card from './Card';
import "./Cardlist.css";

function Cardlist({filteredData}) {

    return (
        <div className='cardList'>
           {    
              filteredData.map((product)=>{
                  return <Card key={product.id_product} product={product}/>
              }) 
           }
        </div>
    );
}

export default Cardlist;