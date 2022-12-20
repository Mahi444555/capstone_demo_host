import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './screens/Login';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
