import Navbar from './component/layout/Navbar';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import Shop from './component/pages/Shop';
import PageNotFound from './component/pages/PageNotFound';
import Adduser from './component/users/Adduser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditUser from './component/users/EditUser';
import User from './component/users/User';
function App() {
  return (

 <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>} ></Route>
          <Route  path="/about" element={<About/>}></Route>
          <Route  path="/contact" element={<Contact/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/adduser" element={<Adduser/>}> </Route>
          <Route path="/user/edit/:id" element={<EditUser/>}></Route>
          <Route path="/user/:id" element={<User/>}></Route>

          <Route path="*" element={<PageNotFound/>}></Route>  

   </Routes>
      </div>
</Router>
  );
}

export default App;
