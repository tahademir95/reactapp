import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component{
    state = {
        users: [
            {
                id: 1,
                name: "Taha Demir",
                department: "IT",
                salary: "5000"
            },
            {
                id: 2,
                name: "Onur Çakır",
                department: "IT",
            },
            {
                id: 3,
                name: "Ahmet Girit",
                department: "IT",
                salary: "4000"
            }
        ]
    }
    render() {
        return (
            <div className="container">
                <Navbar title="User App2"/>
                <hr/>
                <Users users={this.state.users} />
            </div>
        );
    }
}

export default App;