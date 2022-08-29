import logo from './logo.svg';
import './App.css';
import {Projectelem} from './components/projectId';
import {Tableproject} from './components/tableProjects';
import {Homepage} from './components/homePage';
import {Headmenu} from './components/headMenu'
import { Route, Routes } from "react-router-dom";
import Notfound from './pages/notFound';
import Userpage from './pages/userPage';
import Skills from './pages/skillsPage';
import Projectpage from './pages/projectPage';
import Contactpage from './pages/contactPage';

function App() {
  return (
    <div className="App">
      <Headmenu />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path='/users/:id' element={<Userpage />} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/contactme' element={<Contactpage/>}/>
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
