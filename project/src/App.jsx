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
            <div className="calendar">
                <Navigation />
            </div>
            <div className="calendar-body">
                <div className="sidebar">
                    <Sidebar />
                    <Week />
                </div>
            </div>

        </div>

    )
};


export default App;