import logo from './logo.svg';
import './App.css';
import {Projectelem} from './components/projectId';
import {Tableproject} from './components/tableProjects';
import {Headmenu} from './components/headMenu';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Headmenu />      
      <Routes>
        <Route path="/Projects" element={<Tableproject />} />
      </Routes>
    </div>
  );
}

export default App;
