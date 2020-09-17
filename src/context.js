import React, {Component} from 'react';

const UserContext = React.createContext();
const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        case "ADD_USER":
            return  {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
}

export class UserProvider extends Component {
    state = {
        users: [
            {
                id: "u1",
                name: "Taha Demir",
                department: "IT",
                salary: "5000"
            },
            {
                id: "u2",
                name: "Onur Çakır",
                department: "IT",
            },
            {
                id: "u3",
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
