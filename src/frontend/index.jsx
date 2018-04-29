import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LandingPage from './components/Layout/LandingPage';



ReactDOM.render(
  <MuiThemeProvider>
    <LandingPage />
  </MuiThemeProvider>,
  document.getElementById('mount-point'),
);