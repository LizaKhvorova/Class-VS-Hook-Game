import React, { Component } from 'react';
import "./appClass.css";

class CounterWidget extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {
    evenOdd: this.props.count % 2 === 0 ? "even" : "odd"
  }

  static getDerivedStateFromProps(props) {
    return ({evenOdd: props.count % 2 === 0 ? "even" : "odd"})
  }
  
  render() {
    console.log("render");
    console.log(this.state);

    return(
      <>
        <span>
          {this.props.count}
        </span>
        <span>
          {this.state.evenOdd}
        </span>
      </>
      
    )
  }
}

export default class Counter extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this); 
  }

  state = {
    count: 3
  }

  handleIncrement() {
    this.setState({count: this.state.count + 1})
  }

  handleDecrement = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return(
        <div className='wrapper'>
         <CounterWidget count={this.state.count}/>
          <div className='btn-wrapper'> 
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
          </div>
        </div>

    )
  }
}