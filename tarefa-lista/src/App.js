import { useState } from 'react';
import './App.css';


function App() {
  const [tarefa, setTarefa] = useState();
  const [tarefas, setTarefas] = useState([]);


  function adicionar() {
    console.log('adicionar ')
    tarefas.push(tarefa);
    setTarefas([...tarefas]);

    console.log('tarefas ', tarefas)
  }

  return (
    <div className="container">
      <h1>Aluno - Notas</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">sua tarefa</label>
          <input type="text" className="form-control" onChange={(event) => setTarefas(event.target.value)} />
        </div>

        <button type="button" onClick={adicionar}>Adicionar</button>
      </form>

      <ul>
        {
          tarefas.map((n, index) => {
            return <li key={index}>{n}</li>
          })
        }
      </ul>
    </div>
  )
}

export default App;
