
import React, { Component } from 'react';
 
class Hola extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
  render() {
    return (
        <div>
        <h1>Hola mundo</h1>
        <h1>Kelin Silva</h1>
        <p>Has dado click {this.state.count} veces</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
      
    );
  }
}
 
export default Hola;