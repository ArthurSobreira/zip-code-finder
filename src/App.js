import { BiSearchAlt } from 'react-icons/bi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type='text'
        placeholder="Digite seu CEP..."
        />

        <button className="buttonSearch">
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