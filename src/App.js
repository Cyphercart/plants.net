import './App.css';
import Allover from './pages/HOME/Allover';
import Navbar from './pages/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Allover/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
