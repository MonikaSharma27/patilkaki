
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      


      <Footer/>
    </div>
  );
}

export default App;
