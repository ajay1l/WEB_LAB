import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Make sure this file exists
import AppColor from './AppbackgroundColor'; // Ensure the file name matches exactly

ReactDOM.render(
  <React.StrictMode>
    <AppColor heading="Change to Green" lbl="Your Name:" color="green" />
    <AppColor heading="Change to Blue" lbl="Your Name:" color="blue" />
    <AppColor heading="Change to Yellow" lbl="Your Name:" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root') // Ensure this matches the div id in index.html
);
