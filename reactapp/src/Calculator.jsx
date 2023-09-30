import React, { useState } from 'react';
import './Calculator';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!num1 || !num2) {
      setError('Please enter both numbers.');
    } else {
      setError('');
      setResult(`Result: ${Number(num1) + Number(num2)}`);
    }
  };

  const handleSubtract = () => {
    if (!num1 || !num2) {
      setError('Please enter both numbers.');
    } else {
      setError('');
      setResult(`Result: ${Number(num1) - Number(num2)}`);
    }
  };

  const handleMultiply = () => {
    if (!num1 || !num2) {
      setError('Please enter both numbers.');
    } else {
      setError('');
      setResult(`Result: ${Number(num1) * Number(num2)}`);
    }
  };

  const handleDivide = () => {
    if (!num1 || !num2) {
      setError('Please enter both numbers.');
    } else if (num2 === '0') {
      setError('Error: Division by zero');
      setResult('');
    } else {
      setError('');
      setResult(`Result: ${Number(num1) / Number(num2)}`);
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        data-testid="num1"
      />
      <input
        type="number"
        placeholder="Enter number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        data-testid="num2"
      />
      <br />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <button onClick={handleDivide}>Divide</button>
      <br />
      {error && <div data-testid="result">{error}</div>}
      {!error && result && <div data-testid="result">{result}</div>}
    </div>
  );
}

export default Calculator;