import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer/Footer';
import Navbar from './components/shared/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
