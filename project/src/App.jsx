import React from 'react';
import Header from './Header.jsx';
import './index.scss';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';


const App = () => {
    return (

        <div className="page">
            <Header/>
            <div className="lines"><Week/></div>
            <Navigation />
            <section className="calendar">
            <div className="calendar__body"><Sidebar /></div>
                


            </section>
           
        </div>

    )
};


export default App;