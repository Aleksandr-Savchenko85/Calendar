import React from 'react';
import Header from './Header.jsx';
import './index.scss';
import Sidebar from './Sidebar.jsx'


const App = ()=>{
    return(

        <div className="page">
             <Header/>
             <div className="calendar__body">
             <Sidebar/>

             
             </div>
            
             </div>
       
    )
};


export default App;