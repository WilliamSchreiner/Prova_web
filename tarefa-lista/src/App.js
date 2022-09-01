import logo from './logo.svg';
import './App.css';
//envio de forma para nao dar erro nas variaveis
import React, { useState, useRef} from "react";
//O useRef nos permite persistir valores entre renderizações, 
//ele pode ser usado para armazenar o valor de uma variável mutável

function App() {

  // States definidos.
  const [tarefa, setTarefa] = useState();
  const [historico, setHistorico] = useState([]);
  const [listaTarefas, setListaTarefas] = useState([]);

  // REf ID definido.
  const idTarefa = useRef(0);

  //Functions
  function salvar(){
    setListaTarefas(old => {return [...old, {id: idTarefa.current, texto: tarefa} ]})
    idTarefa.current++;
    setTarefa(' ')
  }
  function limparHistorico(){
    setHistorico( [ ] )
    idTarefa = 0;
  }
  function concluir(id){
    // Terminar

  
  }
  function deleteTarefa(id){
  const tmp = listaTarefas.filter(tarefa => tarefa.id !== id );
  // o TMP recebera todas as tarefas cujo ID seja diferente da que ele recebeu.
  setListaTarefas(tmp);
  }
  function editarTarefa(id){
    //Terminar
  }

return (
<>
  <h3> listas de tarefas</h3>

  <form>
    <div id="form">
    <input  type="text" value={tarefa} onChange={(evento) => {setTarefa(evento.target.value) }}></input>
    <br/>
    <button type="button" className="botao" onClick={salvar}>Salvar</button>
    <button type="button" className="botao" onClick={limparHistorico}>Limpar Historico</button>
    </div>
  </form>

  <div className="lista-tarefas">  
  <label>Suas tarefas:</label>
  {listaTarefas.map((tarefa) => {
    return  <p key={tarefa.id} className="p-tarefa">
      {tarefa.texto} 
      <input type="checkbox" onClick={() => concluir(tarefa.id)}></input>
      <button id="botao-delete" onClick={() => deleteTarefa(tarefa.id)}>delete</button>
      <button id="botao-editar" onClick={() => editarTarefa(tarefa.id)}>editar</button>
    </p> 
  })}
  </div>

  <div className="lista-tarefas">  
  <label>Suas tarefas concluidas:</label>
  {historico.map((tarefa) => {
    return  <p key={tarefa.id} id="tarefa-feita" className="p-tarefa">
      {tarefa.texto}</p> 
  })}
  </div> 
</>
);
}

export default App;
