import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

import Home from './page/Home';
import Movies from './page/Movies';
import TVSeries from './page/TVSeries';
import List from './page/List';
import './style.scss';
import './style-res.scss';
import Header from './page/Header';

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
      <footer>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>고객센터</NavLink>
        <NavLink to='/'>이용약관</NavLink>
        <NavLink to='/'>개인정보처리방침</NavLink>
        <NavLink to='/'>법적고지</NavLink>
        <NavLink to='/'>이벤트</NavLink>
        <NavLink to='/'>인재채용</NavLink>
      </footer>
    </Router>
  );
}

export default App;
