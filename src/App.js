import React from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import CategoriasProvider from './context/CategoriaContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './Components/ListaRecetas';
import ModalProvider  from './context/ModalContext';

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header/>

          <div className="container mt-5">
            <div className="row">
              <Formulario/>
            </div>
              <ListaRecetas/>
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
