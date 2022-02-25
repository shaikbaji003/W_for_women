import React, { useEffect, useState } from 'react';
import "./Navbar.css";


function Navbar({searchvaluefunc}) {
    // for search value
    const [search,setSearch]=useState('')
    //sending search value to app.js
    useEffect(()=>{
        searchvaluefunc(search)
    },[search,searchvaluefunc])
    
   
    
    return (
        <div className='navbar'>
            
            <div>
                <img className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkuN1sQD9K-LCEZ_yiDUEe29eRurjPKwJCX0sVXtYv7v-vX05EIhFFUgiYMtih0FcKCVI&usqp=CAU' alt='image'/>
            </div>
            <div>
                <ul className='main_list'>
                    <li className='list'><b>NEW IN</b></li>
                    <li className='list'><b>TOP WEAR    </b></li>
                    <li className='list'><b>BOTTOM WEAR</b></li>
                    <li className='list'><b>COSMETICS</b></li>
                    <li className='list'><b>FOOTWEAR</b></li>
                    <li className='list'><b>WINTER WEAR</b></li>
                    <li className='list' ><b>DRAPES</b></li>
                    <li className='list'><b>WISHFUL</b></li>
                    <li className='list'><b>SALE</b></li>
                </ul>
            </div>
            <div>
                <div className='search'>
                    <input id='inputsearch' placeholder='search'  onChange={(e)=>{setSearch(e.target.value)}} type="text"></input>
                    <button id='searchbtn'>&#128269;</button>
                    
                </div>
               
            </div>
            <div className='right'>
                <button className='login'>log in</button>
                <button className='wishlist'>wishlist</button>
                <button className='cart'>cart</button>
            </div>
            
        </div>
    );
}

export default Navbar;