import React from 'react';
import Header from './Header.jsx';
import './index.scss';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Week from './Week';


const App = () => {
    return (

        <div className="page">
            <Header />
            <section className="calendar">
                <Navigation />

                <div className="calendar__body">
                    
                    <Sidebar />
                    <Week />


                </div>



            </section>
           
        </div>

    )
};


export default App;