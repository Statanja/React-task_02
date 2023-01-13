import React,{useState} from "react";
import { Employees } from "./mapFunction";
import { Table } from "react-bootstrap";


export const Data =()=>{

    const Employees =[
        {
        Number:0,
        Id:1,
        name:'Amal',
        Job :'Developer'
    },
    {
        Number:1,
        Id:2,
        name:'Nimal',
        Job :'Softwear engineer'
    },
    {
        Number:2,
        Id:3,
        name:'Wimal',
        Job :'HR'
    },
    {
        Number:3,
        Id:4,
        name:'Kamal',
        Job :'Developer'
    },
    {
        Number:4,
        Id:5,
        name:'Ranil',
        Job :'Manager'
    },
]

const [show,setShow] = useState(true)

const EmployeeList = Employees.map(Employee =>(
   <tr>
    <td>{Employee.Number}</td>
    <td>{Employee.Id}</td>
    <td>{Employee.name}</td>
    <td>{Employee.Job}</td>
    </tr>)
)



return(
       
        <>
        <div className="com"><h1>Donext Employee Data</h1></div>
        <div className="homebtn">
        <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setShow(true)} >Show Data</button>
        <button id="hmbtn" type="button" className="btn btn-primary" onClick={()=>setShow(false)}>Hide Data</button>
        </div>
        

        <table width="1600px" border="1px">
            <thead >
                <tr >
                <th width="400px" border="1px">#</th>
                <th width="400px" border="1px">Id</th>
                <th width="400px" border="1px">Name</th>
                <th width="400px" border="1px">Job Title</th>
                </tr>
            </thead>
            <tbody>
                { show ? EmployeeList : null}
            </tbody>
        </table>
        </>
    )


}
       
    
    