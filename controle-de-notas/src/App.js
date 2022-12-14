import {useState} from 'react';
import './App.css';
import bootstrap from 'bootstrap' 

function App() {

    const [id, setId] = useState();
    const [nome, setNome] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [lista, setLista] = useState([]);


    function adicionar() {

      if (id){
        const index = lista.findIndex( n => n.id === id);
        lista[index].nome = nome;
        lista[index].nota1 = parseFloat(nota1);
        lista[index].nota2 = parseFloat(nota2);
        lista[index].nota3 = parseFloat(nota3);
        lista[index].media = ((lista[index].nota1 + lista[index].nota2 + lista[index].nota3) / 3).toFixed(2);

        setLista([...lista]);
      } else {
        let nota = {
          id: Math.random().toString(36),
          nome: nome,
          nota1: parseFloat(nota1),
          nota2: parseFloat(nota2),
          nota3: parseFloat(nota3),
          media: 0
        };

        nota.media = ((nota.nota1 + nota.nota2 + nota.nota3)/3).toFixed(2);
        lista.push(nota);
        setLista([...lista]);

      }
      setId('');
      setNome('');
      setNota1('');
      setNota2('');
    }

    function editar(id) {
      const nota = lista.find(n => n.id === id);
      setId(nota.id);
      setNome(nota.nome);
      setNota1(nota.nota1);
      setNota2(nota.nota2);
      setNota3(nota.nota3);
    }

    function excluir(id) {
      const index = lista.find(n => n.id === id);
      lista.splice(index, 1);
      setLista([...lista]);
    }
    
  return (
    <div className="container">
     <h1>Notas dos Alunos</h1>
     <form className="row">
        <div className="  mb-3">
          <label className="form-label">Nome do Aluno</label>
          <input type="text" className="form-control" value={nome} onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="mb-3 col-md-4">
          <label className="form-label">1ª Nota</label>
          <input type="text" className="form-control" value={nota1} onChange={(event) => setNota1(event.target.value)} />
        </div>
        <div className="mb-3  col-md-4">
          <label className="form-label">2ª Nota</label>
          <input type="text" className="form-control" value={nota2}  onChange={(event) => setNota2(event.target.value)} />
        </div>
        <div className="mb-3  col-md-4">
          <label className="form-label">3ª Nota</label>
          <input type="text" className="form-control" value={nota3}  onChange={(event) => setNota3(event.target.value)} />
        </div>
        <div className='col-md-12'>
          <button type="button" className="botaoAdicionar" onClick={adicionar}>Adicionar</button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>Aluno</th>
            <th>1ª Nota</th>
            <th>2ª Nota</th>
            <th>3ª Nota</th>
            <th>Média</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            lista.map((n, index) => {
              return (
                <tr key={index}>
                  <td>{n.nome}</td>
                  <td>{n.nota1}</td>
                  <td>{n.nota2}</td>
                  <td>{n.nota3}</td>
                  <td className={n.media >= 7 ? '' : 'color-table'}>{n.media}</td>
                  <td>
                    <button className="botaoEditar" onClick={() => editar(n.id)}>Editar</button>
                  </td>
                  <td>
                    <button className="botaoExcluir" onClick={() => excluir(n.id)}>Excluir</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    <footer>
      <h4>Integrantes:</h4>
      <p> 1° Amilto;</p>
      <p> 2° João Pedro;</p>
      <p> 3° Lucas Edu. Faleiro;</p>
      <p> 4° William.</p>
    </footer>
    </div>  

  );

        }
export default App;
