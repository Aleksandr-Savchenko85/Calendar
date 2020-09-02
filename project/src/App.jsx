import React from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Week from './Week.jsx';
import moment from 'moment';



export default class App extends React.Component{
    state ={
        realData: moment()
            
    }

    goNext = () => {
        this.setState({
          
        })
    }

    goPrev = () => {
        this.setState({
           
        })
    }

    returnToday = () => {
        this.setState({
           
        })
    }
    

    render(){
        return(
            <div className="page">
            <Header />
            <div className="calendar">
                <Navigation />
            </div>
            <div className="calendar-body">
                <div className="sidebar">
                    <Sidebar />
                    <Week/>
                    
                </div>
            </div>

        </div>

        )
        
    

    }
    

        
};



