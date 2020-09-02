import React from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import Sidebar from './Sidebar.jsx';
import Week from './Week.jsx';
import moment from 'moment';



export default class App extends React.Component{
    state ={
        Date: moment().week('week'),
      

    }
    goNext = () => {
        this.setState({
           Date: this.state.Date.add(1, 'week')
        })
    }

    goPrev = () => {
        this.setState({
            Date: this.state.currentDate.add(-1, 'week')
        })
    }

    returnToday = () => {
        this.setState({
            currentDate: moment().week('week')
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


