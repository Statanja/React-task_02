import React from "react";
import { Button, Table } from "react-bootstrap";
import {useState} from "react";

export function Abs(){

    const [show,setShow] = useState(true)

    return(
        
        <div>

            {
                show?<h2>Hello world</h2> : null
            }
            <button onClick={()=>setShow(true)}>Show</button>
            <button onClick={()=>setShow(false)}>Hide</button>

        </div>

    )
}



    
