import React,{useState} from "react";

export const About =()=>{

    const [name,setName]=useState('About Component')

    return(
        <>
        
        <div className="com"><h1>{name}</h1></div>
        <div className="homebtn">
        <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setName('This is about Component')}>Change </button>
        </div>
        </>
    )
}