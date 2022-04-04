import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

import Home from './components/Home/Home'
import Reviews from './components/Reviews/Reviews'
import Dashboard from './components/Dashboard/Dashboard'
import Blogs from './components/Blogs/Blogs'
import About from './components/About/About'
import Notfound from './components/Notfound/Notfound'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <hr />

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blog' element={<Blogs />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='*' element={<Notfound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
