import React, {Component} from 'react';

class Test extends Component {
    // life cycle da ilk constructor, sonra render, ardından componentDidMount, shouldComponentUpdate ve son olarak componentDidUpdate işlemi sırayla çalışır. Ancak componentDidMount içinde setstate yapılırsa
    //tekrar render işlemi devreye girer
    //projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
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
    componentDidUpdate = (prevProps, prevState) => {
        //state, props değiştiğinde veya forceUpdate olduğunda çalışır
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        //Component kaldırılmadan hemen önce çalışır.
        console.log("componentWillUnmount")
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