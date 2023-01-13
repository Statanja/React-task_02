import './App.css';
import { NavBar } from './componnets/NavBar';
import  {Home}  from './componnets/Home';
import {  Route, Routes } from 'react-router-dom';
import { About } from './componnets/About';
import { Data } from './componnets/Data';
import { Error } from './componnets/Error';
import { Employees } from './componnets/mapFunction';
import { Abs } from './componnets/mapFunction';

  function App() {
    return (
      <>
      <div>
  
        <NavBar/>
        
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/data' element={<Data />} />
            <Route path='*' element={<Error/>} />
          </Routes>
        
       
      </div>
      </>
    );
  }

export default App;
