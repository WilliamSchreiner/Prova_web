import { useState } from 'react';
import './App.css';


function App() {

const [tarefa, setTarefa] = useState();
const [tarefas, setTarefas] = useState([]);
const [id, setId] = useState();
const [index, setIndex] = useState();
const [texto, setTexto] = useState();

function salvar(){

  if (id) {
    index = tarefas.findIndex(i => i.id == id);
    tarefas[index].texto = texto;
}
else{
    tarefa = {
        id: Math.random().toString(36).substring(2), 
        texto: texto,
    };

  tarefas.push(tarefa);
  setTarefas([...tarefas])
  window.localStorage.setItem('tarefas', JSON.stringify(tarefas));
  
}

tarefa = document.querySelector("#input-tarefa").value = null;
}

  return (
    <div className="container">
    <h1>Lista de Tarefas</h1> <br/>
    <form>
      <div className="mb-3">
        <input type="text" id='input-tarefa' className="form-control" onChange={(event) => setTarefa(event.target.value)} />
      </div>

      <button type="button" onClick={salvar}>salvar</button>
    </form>
    </div>
  )
}

export default App;
