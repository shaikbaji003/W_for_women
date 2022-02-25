import React, { useCallback, useState } from 'react';
import Accordion from './Accordian';
import "./Sidemenu.css";

function Sidemenu({setMainState,clearFilter,appliedFilters}) {
    
    const [clearfilter,setClearfilter]=useState([])
    const [singleFilter,setSingleFilter]=useState({});
    
    
   
    const priceFilter=["Rs.0 to Rs.2000","Rs.2000 to Rs.4000","Rs.4000 to Rs.6000","Rs.6000 to Rs.8000","Rs.8000 to Rs.10000","Rs.10000 to Rs.12000"]
    
    const ocationFilter=["Festive","Casual"]
    
    const sizeFilter=['6','8','10','12','14','16','18','20','22','35','36','37','38','39','40','41','42','onesize','WFS']
    const colorFilter=["blue","pink","white","green","yellow","black","red","off-white","beige","maroon","teal","cream","purple","peach","orange","gold","grey","wine","brown","Ecru","multicoloured","silver","musterd","coral","mauve","dark yellow"]
    
    
    //clearall function
    const onclickHandler=()=>{
        
        clearFilter()
        clearfilter.forEach((e)=>{e()})
    }

    //callback function
    const resetState=useCallback((func,singleCheckState,tag)=>{
        setClearfilter((prev)=>[...prev,func])
       
        setSingleFilter((prev)=>{
            const current={...prev}
            current[tag]=singleCheckState
            return current
        })
    },[])
    //for removing value from array of filters
    const removeValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {
                const currentValues = { ...prev };
                currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
                return currentValues;
            })

            
        }
    };

    // X button function
    
  
    const cancelfunc=(str)=>{
        const split=str.split(':')
        const tag=split[0].toLowerCase()
        const inputVal=split[1]
        let filterName;
        if(tag==="color"){
            filterName='colorFilter'
        }
        if(tag==="price"){
            filterName='priceFilter'
        }
        if(tag==="occasion"){
            filterName='occasionFilter'
        }
        if(tag==='size'){
            filterName='sizeFilter'
        }
        
    
        const func=singleFilter[filterName]
        if(func){
            func(inputVal)
        }
        removeValue(inputVal,filterName)
    
       

    }
     
    return (
        <div className="sidemenu">
            <div>
                
                <div className='filter'>filters</div>
                {appliedFilters.length>0 && <div className='appliedFiltes'>{appliedFilters.map((ele)=>{
                    return(<div key={ele} className='element-container'>{appliedFilters.length>1&&<span className='cancel' onClick={()=>cancelfunc(ele)}>X</span>}<span className='element'>{ele}</span></div>)
                })}<button className='clearall' onClick={onclickHandler}>clear all</button></div>}
               
                <Accordion title={"price"} data={priceFilter}  tag='priceFilter' setMainState={setMainState} callback={resetState}     />
                <Accordion title={"color"} data={colorFilter} tag='colorFilter' setMainState={setMainState} callback={resetState} />
                <Accordion  title={"Occasion"} data={ocationFilter} tag='occasionFilter' setMainState={setMainState} callback={resetState} />
                <Accordion title={"Size"} data={sizeFilter} tag='sizeFilter' setMainState={setMainState} callback={resetState} />
               
           </div>
        </div>
    );
}

export default Sidemenu;