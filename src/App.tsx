import React from 'react';
import Header from './components/Header';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        {/* Other content will go here */}
      </div>
    </div>
  );
};

export default App;
