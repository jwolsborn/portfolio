import React, { Component } from 'react';
import picture from './josh.jpeg';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Welcome to the Josh Wolsborns Portfolio Home Page!</h1>
                <img src={picture} alt="me"/>
            </div>
        );
    }
}

export default Home;
