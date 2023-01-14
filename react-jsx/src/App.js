import ItemsLista from './components/ItemsLista';
import Lista from './components/Lista';
import SubTitulo from './components/SubTitulo';
import Titulo from './components/Titulos';

function App() {
  return (
        <><Titulo titulo="Hola Dojo" />
        <SubTitulo subTitulo="Cosas que necesito hacer"/>
        <Lista>
        <ItemsLista item="Aprender React"/>
        <ItemsLista item="Subir a la montanha Everest"/>
        <ItemsLista item="Correr la maraton"/>
        <ItemsLista item="Alimentar a los perros"/>
        </Lista>
        </>

      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
  );
}

export default App;
