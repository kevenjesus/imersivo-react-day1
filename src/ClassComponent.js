import React, { Component } from 'react'; 

import Loading from './loading.gif';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChildren: false,
            text: null
        }
    }

    componentDidMount() {
       console.log("depois de carregar")
    }

    componentWillMount() {
        console.log("antes de carregar")
    }

    changeText(event) {
        const value = event.target.value;
        this.setState({text: value})
    }

    render() {
        return <div>
            
            <input type="text" onChange={this.changeText.bind(this)} value={this.state.text} />
            <br />
            {
                this.state.text !== null ?
                this.state.text :
                <img src={Loading} />
            }

        </div>
    }
};

export default ClassComponent;