import React, { Component } from 'react';
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render() {
        return (
            <Provider value={{
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
}