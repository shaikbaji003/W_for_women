
import React, { useEffect, useState } from 'react';

import "./Accordian.css";


function Accordion({ title, data, setMainState, tag,callback}) {
    const [isOpen, setIsOpen] = useState(false);
    const [checkedState, setCheckedState] = useState([]);
    const showUpArrow = () => <span className='arrow'>&#94;</span>;
    const showDownArrow = () => <span className='arrow'>&#x2228;</span>
    
    useEffect(()=>{
        const clearCheckState=()=>{
            setCheckedState([])
        }
        const singleCheckState=(id)=>{
            const newState = [...checkedState];
            setCheckedState(newState.filter(value => value !== id));
        }
        if(callback){
            callback(clearCheckState,singleCheckState,tag)
        }
        
    },[callback,checkedState,tag])
    
    
    
    //adding value into object array
    const addValue = (inputVal, filterName) => { 
        if (inputVal) {
            setMainState((prev) => {

                const currentValues = { ...prev };

                const filters = [...currentValues[filterName]];

                filters.push(inputVal);
                currentValues[filterName] = filters;

                return currentValues;
            })
        }
    };
    // for removing value from object array
    const removeValue = (inputVal, filterName) => {
        if (inputVal) {
            setMainState((prev) => {
                const currentValues = { ...prev };
                currentValues[filterName] = currentValues[filterName].filter((val) => val !== inputVal)
                return currentValues;
            })
        }
    };
    const onclickHandler = (e, name, tag) => {
        const isChecked = e.target.checked;
        
        if (isChecked) {
            addValue(name, tag)
            //Add value to check state
            const newState = [...checkedState, name];
            setCheckedState(newState)
            // setCheckedState1(newState)
        }
        else {
            removeValue(name, tag) //6
            //Remove value from check state
            const newState = [...checkedState];
            setCheckedState(newState.filter(value => value !== name));
            // setCheckedState1(newState.filter(value => value !== name))
        }

    }
    
    // create checkbox for filters
    const func = () => {
        return (data.map((name) => {
            return (<div className='filtersList' key={Math.random()}>
                <input type="checkbox" name='inputbox' value={name} className="accordian_check"  onChange={(e) => onclickHandler(e, name, tag)} checked={checkedState.includes(name)}></input>

                <label htmlFor="inputbox" >{name}</label>
            </div>)
        }))
    }
    
    return (
        <div>
            {title &&
                <div onClick={()=>setIsOpen(!isOpen)} className='title-container'>
                    <div className='title' >{title}</div>
                    {<div>{isOpen ? showUpArrow() : showDownArrow()}</div>}
                </div> 
            }
            
            
            {data && isOpen && <div className="content">{func()}</div>}
        </div>);
}

export default Accordion;
