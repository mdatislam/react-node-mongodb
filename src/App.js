
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddUser from './Components/AddUser/AddUser';
import Home from './Components/Home/Home';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/user/add' element={<AddUser></AddUser>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/Edit/:id' element={<UpdateUser></UpdateUser>}></Route>
     </Routes>
    </div>
  );
}

export default App;
