import  React, { Component } from 'react';

const initialState = {
    name: 'Sunny',
    message: 'HOCs are cool!!!'
  }
  
  // define new type - usually define state properly
  type State = Readonly<typeof initialState>;

// Create the HOC function
// The function returns a stateful component class 
const messageHoc = (WrappedComponent: any) => {
    class HOC extends Component<{}, State> {
        readonly state: State = initialState;

        render() {
            return (
                <WrappedComponent name={this.state.name} 
                message={this.state.message}/>
            )
        }
    }
    // return the class component
    return HOC;

}

export default messageHoc;