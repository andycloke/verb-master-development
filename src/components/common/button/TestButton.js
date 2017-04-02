import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import theme from './TestButton.css';

const TestButton = props =>
  <Button {...props} theme={theme}/>;


export default TestButton;
