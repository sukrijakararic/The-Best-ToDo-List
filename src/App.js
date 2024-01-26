import React from 'react';
import { Header } from './components/Header'
import { Tasks } from './components/Tasks';
import './App.css';

function App() {
  return (
    <div>
        <Header />
        <div>
          <Tasks />
        </div>
    </div>
  );
}

export default App;
