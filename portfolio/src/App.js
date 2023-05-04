import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<About/>} />

     
      </Routes>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
