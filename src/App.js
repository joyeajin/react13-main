import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Company from './pages/Company';
import {Routes ,Route} from 'react-router-dom' ;
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import RedirectsRoute from './route/RedirectsRoute';
import { useState } from 'react';
function App() {
  const [auth,setAuth] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} /> 
        <Route path='/product' element={<Product/>} />
        <Route path='/product/:id' element={<ProductDetail/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/user' element={<RedirectsRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
