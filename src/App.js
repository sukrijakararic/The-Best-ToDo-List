import React from 'react';
import { Header } from './components/Header'
import { Subtitle } from './components/Subtitle';
import { Tasks } from './components/Tasks';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <div>
          <Subtitle />
          <Tasks />
        </div>
    </div>
  );
}

export default App;
