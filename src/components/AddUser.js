import React, {Component} from 'react';
import posed from 'react-pose';
import UserConsumer from "../context";

var uniqid = require('uniqid');
const Animation = posed.div({
    visible: {
        opacity:1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0,
        applyAtEnd: {
            display: "none"
        }
    }
});
class AddUser extends Component {
    state = {
        isVisible: false,
        name : "",
        department : "",
        salary : ""
    }

    changeVisibility = (e) => {
        this.setState({isVisible: !this.state.isVisible})
    }
    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    addUser = (dispatch, e) => {
        e.preventDefault(); //bunu yapmassan form u her submit yaptığında sayfayı yeniler
        const {name, department, salary} = this.state;

        const newUser = {
            id: uniqid(),
            name: name,
            salary: salary,
            department: department
        }
        dispatch({type: "ADD_USER", payload: newUser});


    }

    render() {
        const {isVisible, name, department, salary} = this.state;
        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch}  = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <button className="btn btn-dark btn-block mb-2" onClick={this.changeVisibility}>{isVisible ? "Hide Form" : "Show Form"}</button>
                                <Animation pose={isVisible ? "visible" : "hidden"}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="d-inline">Add User Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={this.addUser.bind(this, dispatch)}>
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input type="text" name="name" id="id" value={name} onChange={this.changeInput} placeholder="Enter Name" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department">Department</label>
                                                    <input type="text" name="department" id="department" value={department} onChange={this.changeInput} placeholder="Enter Department" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary">Salary</label>
                                                    <input type="text" name="salary" id="salary" value={salary} onChange={this.changeInput} placeholder="Enter Salary" className="form-control"/>
                                                </div>
                                                <button type="submit" className="btn btn-danger btn-block">Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        );
                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;