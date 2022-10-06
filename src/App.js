import './App.css';
import React from "react";
import Data from './data/ImageData.json'
import ChontLogo from './images/CHONT_LOGO_white.png'




import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import { Portfolio } from "./pages/Portfolio";
import { Shop } from "./pages/Shop";
import { Booking } from "./pages/Booking";
import { Home } from "./pages/Home";
import { Tab3D } from './pages/Tab3D';
import { Totems } from './pages/Totems';
import { Contact } from './pages/Contact';
import { News } from './pages/News';
import { About } from './pages/About';


const App = () => {

  return (
    <>
      <div className='main'>


        <nav>
          <div className='logo'>
            <img src={ChontLogo} alt="Chont Art Logo" />

          </div>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/totems">Totems</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Холбоо барих</Link>
            </li>
            <button>DONATE</button>
          </ul>
        </nav>
        <Routes>
          <Route path="/Booking" element={<Booking data={Data} />} />
          <Route path="/Portfolio" element={<Portfolio data={Data} />} />
          <Route path="/Totems" element={<Totems />} />
          <Route path="/Tab3D" element={<Tab3D data={Data} />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
        </Routes>


        <span style={{ color: "white", paddingBottom: "20px", fontSize: "13px" }}>© Copyright All Rights Reserved | Telmen Bayasgalan 2022</span>
      </div>
    </>
  );
}
export default App;