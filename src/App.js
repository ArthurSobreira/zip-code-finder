import api from './services/api';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './style.css';


function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

   async function handleSearch(){
    if(input === ''){
      alert('Digite algum CEP!')
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput('');

    }catch{
      alert("Ops, ocorreu algum erro...")
      setInput('')
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type='text'
        placeholder="Digite seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <BiSearchAlt size={25} color="#FFF"/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade} - {cep.uf}</span>
      </main>
      )}
    </div>
  );
}

export default App;