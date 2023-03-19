import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Views/login';
import Home from './Views/Home';
import Data from './Views/data';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path="/" Component={Login}/>
    <Route exact path="/home" Component={Home}/>
    <Route exact path="/data/:id" Component={Data}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
