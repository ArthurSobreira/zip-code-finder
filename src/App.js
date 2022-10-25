import api from './services/api';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import './style.css';


function App() {

  const [input, setInput] = useState('')

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

      <main className='main'>
        <h2>CEP: 00000000</h2>

        <span>Rua Teste algum</span>
        <span>Complemento: Algum Complemento</span>
        <span>Bairro: Algum Bairro</span>
        <span>Cidade: Alguma Cidade</span>

      </main>
    </div>
  );
}

export default App;