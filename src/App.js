// import './App.css';

import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import {originals,action, Comedy, Horror, Romance,} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
     
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Originals'/>
        <RowPost url={action} title='Action' isSmall/>
        <RowPost url={Comedy} title='Comedy' isSmall/>
        <RowPost url={Horror} title='Horror' isSmall/>
        <RowPost url={Romance} title='Romance' isSmall/>
    
    </div>
  );
}

export default App;
