import React from 'react';
import Header from './Header.jsx';
import './index.scss';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';


const App = () => {
    return (

        <div className="page">
           <header className="header"><Header/></header>
           <div className="calendar">
               <Navigation/>
               <div className='lines'>
                   <Sidebar/>
               </div>
               <div className="lines">
                   <Week/>
               </div>
           </div>
        </div>

    )
};


export default App;