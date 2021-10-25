/*
 * -------------------------------
 * Copyright © 2021 Dariusz Wójcik
 * -------------------------------
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import EventRegistration from './scenes/eventRegistration';

ReactDOM.render(
  <React.StrictMode>
    < EventRegistration />
  </React.StrictMode>,
  document.getElementById('root')
);