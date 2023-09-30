// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleButtonClick = (value) => {
    if (waitingForSecondOperand) {
      setDisplayValue(value);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  const handleOperatorClick = (nextOperator) => {
    if (firstOperand === null) {
      setFirstOperand(displayValue);
    } else if (operator) {
      const result = calculate();
      setFirstOperand(result);
      setDisplayValue(result);
    }

    setOperator(nextOperator);
    setWaitingForSecondOperand(true);
  };

  const calculate = () => {
    const prev = parseFloat(firstOperand);
    const current = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        if (current === 0) return 'Error';
        return prev / current;
      default:
        return current;
    }
  };

  const handleEqualClick = () => {
    if (operator && firstOperand !== null) {
      const result = calculate();
      setDisplayValue(result);
      setFirstOperand(result);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="operator-display">{operator}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <br/>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleClearClick()}>C</button>
          <button onClick={() => handleEqualClick()}>=</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
