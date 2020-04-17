import React from 'react';
import './App.css';
import Mensagem from './components/Mensagem';
import MensagensExibidas from './components/MensagensExibidas';


function App() {
  return (
    <div className="App">
      <MensagensExibidas />
      <Mensagem />
      
    </div>
  );
}

export default App;
