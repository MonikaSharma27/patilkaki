
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Karanji from './components/Karanji';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
     
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path={"/Karanji"} element={<Karanji />}/>
      </Routes>
   
     
     
      <Footer/>
    </div>
  );
}

export default App;
