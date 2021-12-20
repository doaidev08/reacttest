import logo from '../../logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import {Menulistss} from './menulist.js';
function Navbar(){
  return(
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">

  <Router>
      <Link to="/" className="navbar-brand">
          <img src={logo}/>Doaidev08
      </Link>
  </Router>
  <button id="button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      {Menulistss.map((item)=>{
          return(
            <li class="nav-item">
              <a class={item.classN} href={item.url}>
                  {item.title}
              </a>
            </li>
          )
      })}
    </ul>
  </div>
</nav>
  );
}
export default Navbar;
