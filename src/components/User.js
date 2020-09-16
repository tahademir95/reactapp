import React, {Component} from 'react';
import PropTypes from "prop-types";

class User extends Component {

    state = {
        isVisible: false
    }
    static defaultProps = {
        name: "Bilgi yok",
        salary: "Bilgi yok",
        department: "Bilgi yok"
    }

    onClickEvent = (number, e) =>{
        console.log(this);
        console.log(number)
    }
    render() {

        //Destructing
        const {name, department, salary} = this.props
        const {isVisible} = this.state

        return (
            <div className="col-md-8 mb-4">
                <div className="card">
                    <div className="card-header d-flex justify-content-between">
                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>{name}</h4>
                        <i className="fa fa-trash-alt" style={{cursor: "pointer"}}/>
                    </div>
                    {
                        isVisible ?
                            <div className="card-body">
                                <p className="card-text">Maaş: {salary}</p>
                                <p className="card-text">Department: {department}</p>
                            </div> : null
                    }

                </div>
            </div>
        );
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

export default User;
