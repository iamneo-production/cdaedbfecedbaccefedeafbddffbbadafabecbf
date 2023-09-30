// Calculator.js

import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0',
      operator: null,
      previousValue: null,
    };
  }

  handleButtonClick = (value) => {
    if (value === 'C') {
      this.clearDisplay();
    } else if (value === '=') {
      this.calculateResult();
    } else {
      this.addToDisplay(value);
    }
  };

  addToDisplay = (value) => {
    const { displayValue } = this.state;
    if (displayValue === '0') {
      this.setState({ displayValue: value });
    } else {
      this.setState({ displayValue: displayValue + value });
    }
  };

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      operator: null,
      previousValue: null,
    });
  };

  calculateResult = () => {
    const { displayValue, operator, previousValue } = this.state;
    if (operator && previousValue) {
      const result = eval(`${previousValue} ${operator} ${displayValue}`);
      this.setState({
        displayValue: String(result),
        operator: null,
        previousValue: null,
      });
    }
  };

  setOperator = (operator) => {
    const { displayValue } = this.state;
    this.setState({
      operator,
      previousValue: displayValue,
      displayValue: '0',
    });
  };

  render() {
    const { displayValue } = this.state;
    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <div className="row">
            <button onClick={() => this.handleButtonClick('7')}>7</button>
            <button onClick={() => this.handleButtonClick('8')}>8</button>
            <button onClick={() => this.handleButtonClick('9')}>9</button>
            <button onClick={() => this.setOperator('+')}>+</button>
          </div>
          <br/>
          <div className="row">
            <button onClick={() => this.handleButtonClick('4')}>4</button>
            <button onClick={() => this.handleButtonClick('5')}>5</button>
            <button onClick={() => this.handleButtonClick('6')}>6</button>
            <button onClick={() => this.setOperator('-')}>-</button>
          </div>
          <br/>
          <div className="row">
            <button onClick={() => this.handleButtonClick('1')}>1</button>
            <button onClick={() => this.handleButtonClick('2')}>2</button>
            <button onClick={() => this.handleButtonClick('3')}>3</button>
            <button onClick={() => this.setOperator('*')}>*</button>
          </div>
          <br/>
          <div className="row">
            <button onClick={() => this.handleButtonClick('0')}>0</button>
            <button onClick={() => this.handleButtonClick('C')}>C</button>
            <button onClick={() => this.handleButtonClick('=')}>=</button>
            <button onClick={() => this.setOperator('/')}>/</button>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default Calculator;
