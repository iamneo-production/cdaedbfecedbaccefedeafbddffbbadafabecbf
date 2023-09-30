// Calculator.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

test('Renders without crashing', () => {
  render(<Calculator />);
});

test('Adds two numbers correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('10')).toBeInTheDocument();
});

test('Subtracts two numbers correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  expect(getByText('5')).toBeInTheDocument();
});

test('Multiplies two numbers correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByText('12')).toBeInTheDocument();
});

test('Divides two numbers correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  expect(getByText('2')).toBeInTheDocument();
});

test('Displays an error for division by zero', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('='));
  expect(getByText('Error')).toBeInTheDocument();
});
