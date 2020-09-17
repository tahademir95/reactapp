import React, {Component} from 'react';

const UserContext = React.createContext();

export class UserProvider extends Component {
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
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
