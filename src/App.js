import React from 'react';
import './css/style.css'
import Header from './components/Header'
import Home from './components/Home'
import {Route} from 'react-router-dom'
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="app">
      <Route exact strict path='/'>
        <Header />
        <Home />
      </Route>

      <Route exact strict path='/showcase'>
        <Showcase />
      </Route>
    </div>
  );
}

export default App;
