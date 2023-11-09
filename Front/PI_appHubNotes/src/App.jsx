import React, { useState } from 'react';
import './App.css';

function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (titulo.trim() === '' || conteudo.trim() === '') {
      return;
    }

    const novaTarefa = { titulo, conteudo };
    setTarefas([...tarefas, novaTarefa]);
    setTitulo('');
    setConteudo('');
  };

  return (
    <div className="App" style={{ width: '393px', height: '852px' }}>
      <header className="App-header">
        <h1>Nova Anotação</h1>
      </header>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            placeholder="nova Anotação"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
          <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
        <div className="tarefas-container">
          {tarefas.map((tarefa, index) => (
            <div key={index} className="tarefa">
              <h2>{tarefa.titulo}</h2>
              <p>{tarefa.conteudo}</p>
            </div>
          ))}
        </div>
        <button onClick={() => window.location.reload()}>Início</button>
      </div>
    </div>
  );
}

export default App;
