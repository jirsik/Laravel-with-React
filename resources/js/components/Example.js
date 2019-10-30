import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: null
        }
    }

    componentDidMount() {
        this.setState({
            user: JSON.parse(document.getElementById('user').value)
        });
        document.getElementById('user').value = '';  //preventing displaying information in DevTools
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Hello { this.state.user ? this.state.user.name : 'unknown'}</div>

                            <div className="card-body">I'm an example component!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('my-react')) {
    ReactDOM.render(<Example />, document.getElementById('my-react'));
}
