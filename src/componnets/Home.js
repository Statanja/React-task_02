import React,{useState} from "react";


export const Home =()=>{

    
    const [count , setCount] =useState(0)
    
    return(
        <>
        <div className="com"><h1>Home Component</h1></div>
        <div className="homebtn">
        <div>{count}</div>
            <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setCount(count+1)}>Increment </button>
            <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setCount(count-1)}>Decrement </button>
            <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setCount(0)}>Reset </button>
            
        </div>
        </>
    )
}