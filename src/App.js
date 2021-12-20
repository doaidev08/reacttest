
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from './component/Navbar/navbar.js';
import Main from './component/Main/main.js';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
    </div>
  );
}

export default App;
