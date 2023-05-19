import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects'
import Contact from './Components/Contact/contact'
function App() {
  return (
   <>
      <BrowserRouter>
      <Routes>
       
        <Route path='/' element={<Header/>} />

     
      </Routes>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
