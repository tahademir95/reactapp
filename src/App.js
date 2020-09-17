import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component{

    deleteUser = (id) => {
        this.setState({users: this.state.users.filter(user => user.id !== id)})
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