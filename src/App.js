import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Company from './pages/Company';
import {Routes ,Route} from 'react-router-dom' ;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} /> 
      </Routes>
    </div>
  );
}

export default App;
