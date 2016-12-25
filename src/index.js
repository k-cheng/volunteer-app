import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import EventInfoForm from './components/event_info_form';
import '../style/index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <EventInfoForm />,
  document.querySelector('.form-container')
)
