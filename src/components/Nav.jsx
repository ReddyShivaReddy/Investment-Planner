import React from "react";
import {useState} from "react";

import { Outlet, Link } from "react-router-dom";
import Theme from "./Theme";
import Home from "./Home";


function Nav() {
  // const [con, setCon] = useState('Dark');
  // const theme = () => {
  //   if(con=='Dark'){
  //     setCon('Light')
  //   }
  //   else{
  //     setCon('Dark')
  //   }
  // };
  
  return (
    <div className="navbar">
      {/* <div> */}
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ color: "#3bb273" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/planner" style={{ color: "#3bb273" }}>
              Investment planner
            </Link>
          </li>
          <li>
            <Link to="/About" style={{ color: "#3bb273" }}>
              About Us
            </Link>
          </li>
          {/* <li>
            <button onClick={theme}>{con}</button>
          </li> */}
        </ul>
      </nav>
      <Outlet />
      {/* </div> */}
    </div>
  );
  <Home value={con} />
}

export default Nav;
