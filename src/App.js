import { BiSearchAlt } from 'react-icons/bi'

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
    </div>
  );
}

export default App;