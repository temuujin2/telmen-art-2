import './App.css';
import React from "react";
import Data from './data/ImageData.json'
import ChontLogo from './images/CHONT_LOGO_white.png'
import Box from '@mui/material/Box';  
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import VerticalLinearStepper from './component/Stepper';

import {
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

const style = {
  position: 'absolute',
  borderRadius:'15px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <button onClick={handleOpen}>DONATE</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Thank you for supporting me
                </Typography>
                <VerticalLinearStepper/>
              </Box>
            </Modal>
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


        <span style={{ color: "white", paddingBottom: "20px", fontSize: "13px", marginTop:'50px' }}>© Copyright All Rights Reserved | Telmen Bayasgalan 2022</span>
      </div>
    </>
  );
}
export default App;