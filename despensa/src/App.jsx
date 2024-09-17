import React from 'react';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

import { BrowserRouter , Route ,Routes} from 'react-router-dom';





const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
    
    
    
    </BrowserRouter>




   
    
    
    </>
  )
}

export default App