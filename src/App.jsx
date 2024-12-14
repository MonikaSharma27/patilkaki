
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Karanji from './components/Karanji';
import Modak from './components/Modak';
import Puranpoli from './components/Puranpoli';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
     
      <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route index path={"/Karanji"} element={<Karanji />}/>
      <Route index path={"/Modak"} element={<Modak />}/>
      <Route index path={"/Puranpoli"} element={<Puranpoli />}/>
      </Routes>
   
     
     
      <Footer/>
    </div>
  );
}

export default App;
