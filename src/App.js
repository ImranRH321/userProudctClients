
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './componets/shared/Login';
import Register from './componets/shared/Register';

function App() {
  return (
    <div className="App">
      <h1>Header / Navbar route</h1>
       <Routes>
        <Route path='login' element={<Login/>}></Route>
        <Route path='register' element={<Register/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
