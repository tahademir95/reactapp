import React, {Component} from 'react';

const UserContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default:
            return state
    }
}

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
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
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
