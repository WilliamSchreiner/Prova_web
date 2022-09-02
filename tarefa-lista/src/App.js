
import './App.css';
import {useState} from 'react';

function App() {
  const [id, setId] = useState(0);
  const [tarefa, setTarefa] = useState('');
  const [descr, setDescr] = useState('');
  const [lista, setLista] = useState([]);
  const [listaFeita, setListaFeita] = useState([]);

  //functions
  function salvarTarefa(){
    if (id){
      const index = lista.findIndex( n => n.id === id);
      lista[index].tarefa = tarefa;
      lista[index].descr = descr;

      setLista([...lista]);
    } else {
      let tarefas = {
        id: Math.random().toString(36),
        tarefa: tarefa,
        descr: descr,
      };

      lista.push(tarefas);
      setLista([...lista]);
    }
    setId('');
    setTarefa('');
    setDescr('');
  }
  function concluirTarefa(id){
    let index = lista.findIndex(f => f.id === id);
    listaFeita.push(lista[index])
    lista.splice(index, 1);

      setListaFeita([...listaFeita]);
    setId('');
    setTarefa('');
    setDescr('');
  }
  function deleteTarefa(id){
    const index = lista.find(n => n.id === id);
      lista.splice(index, 1);
      setLista([...lista]);
  }
  function editarTarefa(id){
    const tarefas = lista.find(n => n.id === id);
      setId(tarefas.id);
      setTarefa(tarefas.tarefa);
      setDescr(tarefas.descr);
  }
  function limparHistorico() {
    setListaFeita( [ ] );
  }


  return (
    <>
    <h2>Lista de tarefas</h2>
    <div>
      <form>
        <input type="text" value={tarefa} placeholder="Escreva a sua tarefa" onChange={(event) => setTarefa(event.target.value)}></input><br/>
        <input type="text" value={descr} placeholder="Escreva a sua descrição" onChange={(event) => setDescr(event.target.value)}></input><br/>
        <button type="button" onClick={salvarTarefa}>salvar</button>
        <button type="button" onClick={limparHistorico}>limpar historico</button>
      </form>
    </div>

    <div id="lista-tarefas">
    {lista.map((tarefas) => {
    return  <p key={tarefas.id} className="p-tarefa">
      <p id="p-title">{tarefas.tarefa + ':'}</p> {tarefas.descr}
      <input type="checkbox"  onClick={() => concluirTarefa(tarefas.id)}></input>
      <button  className="material-icons" id='delete-button' onClick={() => deleteTarefa(tarefas.id)}>delete</button>
      <button  className="material-icons" id='editar-button' onClick={() => editarTarefa(tarefas.id)}>edit</button>
    </p> 
  })}
    </div>

    <div id="listas-tarefasFeitas">
    {listaFeita.map((tarefas) => {
    return  <p key={tarefas.id} className="p-tarefaFeitas">
      <p id="p-title">{tarefas.tarefa + ':'}</p> 
      {tarefas.descr} 
      </p> })}
    </div>
    </>
  );
}

export default App;
