import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
