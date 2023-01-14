import ItemsLista from './components/ItemsLista';
import Lista from './components/Lista';
import SubTitulo from './components/SubTitulo';
import Titulo from './components/Titulos';

function App() {
  return (
    <><Titulo titulo="Hola Dojo" />
      <SubTitulo subTitulo="Cosas que necesito hacer" />
      <Lista>
        <ItemsLista item="Aprender React" />
        <ItemsLista item="Subir a la montanha Everest" />
        <ItemsLista item="Correr la maraton" />
        <ItemsLista item="Alimentar a los perros" />
      </Lista>
    </>
  );
}

export default App;
