import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
