import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

import Home from './page/Home';
import Movies from './page/Movies';
import TVSeries from './page/TVSeries';
import List from './page/List';
import './style.scss';
import './style-res.scss';
import Header from './page/Header';
import Footer from './page/Footer';

function App() {
  return (
    <Router className="App">
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/tvseries' element={<TVSeries/>}/>
          
          <Route path='/movies/:id' element={<List/>}/>
          <Route path='/tvseries/:id' element={<List/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
