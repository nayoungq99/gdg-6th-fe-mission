import {Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CategoryPage from './pages/CategoryPage';
import PricePage from './pages/PricePage';
import SortPage from './pages/SortPage';
import AdminPage from './pages/AdminPage';

function App() {
  return(
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/category' element={<CategoryPage />} />
          <Route path='/price' element={<PricePage />} />
          <Route path='/sort' element={<SortPage />} />
          <Route path='/admin' element={<AdminPage />} />
          
        </Routes>
        <Footer />

      </div>
  
  );
}

export default App;