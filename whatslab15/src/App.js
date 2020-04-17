import React from 'react';

import './App.css';

function App() {
  return (
    <div className="Mensagem-container">
   
      <div className="mensagem-canva">
        <div className="mensagens-tela" ></div>
        <div className="inputs-tela">
          <input className="input-nome" onChange="" placeholder="Nome"/>
          <input className="input-mensagem" onChange="" placeholder="Sua mensagem"/>
          <button onChange="">Enviar</button>
        </div>
      </div>
   
    </div>
  );
}

export default App;
