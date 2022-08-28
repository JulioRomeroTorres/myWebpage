import logo from './logo.svg';
import './App.css';
import {Projectelem} from './components/projectId';
import {Tableproject} from './components/tableProjects';
import {Headmenu} from './components/headMenu';

function App() {
  return (
    <div className="App">
      <Headmenu />
      <Tableproject />
    </div>
  );
}

export default App;
