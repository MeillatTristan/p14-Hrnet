import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./assets/css/style.css"
import Header from './layout/Header';
import Employees from './pages/Employees';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/employee-list" element={ <Employees /> } />
      </Routes>
    </div>
  );
}

export default App;
