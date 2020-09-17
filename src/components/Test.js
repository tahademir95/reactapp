import React, {Component} from 'react';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:10
        }
        console.log("Constructor");
    }

    componentDidMount() {
        //Api istekleri burda gerçekleşir
        //state set edilebilir
        console.log("componentDidMount")
    }

    render() {
        //setstate işlemi olmaz
        console.log("render")
        return (
            <div>
                
            </div>
        );
    }
}

export default Test;