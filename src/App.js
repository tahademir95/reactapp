import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component{


    render() {
        return (
            <div className="container">
                <Navbar title="User App2"/>
                <hr/>
                <Users />
            </div>
        );
    }
}

export default App;