import React, {Component} from 'react';
import posed from 'react-pose';

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
        isVisible: false
    }

    changeVisibility = (e) => {
        this.setState({isVisible: !this.state.isVisible})
    }

    render() {
        const {isVisible} = this.state;
        return (
            <div className="col-md-8 mb-4">
                <button className="btn btn-dark btn-block mb-2" onClick={this.changeVisibility}>{isVisible ? "Hide Form" : "Show Form"}</button>
                <Animation pose={isVisible ? "visible" : "hidden"}>
                    <div className="card">
                        <div className="card-header">
                            <h4 className="d-inline">Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="id" placeholder="Enter Name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="department">Department</label>
                                    <input type="text" name="department" id="department" placeholder="Enter Department" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="salary">Salary</label>
                                    <input type="text" name="salary" id="salary" placeholder="Enter Salary" className="form-control"/>
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

export default AddUser;