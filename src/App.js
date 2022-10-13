import './App.css';
import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Data from './data/ImageData.json';
import Logo_1 from './images/Logo-1.png';
import Typography from '@mui/material/Typography';
import ChontLogo from './images/CHONT_LOGO_white.png';
import VerticalLinearStepper from './component/Stepper';

import {
  Route,
  Link, Routes
} from "react-router-dom";
import { News } from './pages/News';
import { Shop } from "./pages/Shop";
import { Home } from "./pages/Home";
import { Tab3D } from './pages/Tab3D';
import { About } from './pages/About';
import { Print } from './pages/Print';
import { Merch } from './pages/Merch';
import { Totems } from './pages/Totems';
import { Models } from './pages/Models';
import { Booking } from "./pages/Booking";
import { Contact } from './pages/Contact';
import { Portfolio } from "./pages/Portfolio";
import { Tutorials } from './pages/Tutorials';
import { Collectibles } from './pages/Collectibles';

const style = {
  position: 'absolute',
  borderRadius: '15px',
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
            <img className='top_logo1' src={ChontLogo} alt="Chont Art Logo" />
            <img className='top_logo2' src={Logo_1} alt="Chont Art Logo" />

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
                <VerticalLinearStepper />
              </Box>
            </Modal>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/News" element={<News />} />
          <Route path="/About" element={<About />} />
          <Route path="/Totems" element={<Totems />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Print" element={<Print data={Data} />} />
          <Route path="/Tab3D" element={<Tab3D data={Data} />} />
          <Route path="/Merch" element={<Merch data={Data} />} />
          <Route path="/Models" element={<Models data={Data} />} />
          <Route path="/Booking" element={<Booking data={Data} />} />
          <Route path="/Portfolio" element={<Portfolio data={Data} />} />
          <Route path="/Tutorials" element={<Tutorials data={Data} />} />
          <Route path="/Collectibles" element={<Collectibles data={Data} />} />
        </Routes>


        <span style={{ color: "white", paddingBottom: "20px", fontSize: "13px", marginTop: '50px' }}>© Copyright All Rights Reserved | Telmen Bayasgalan 2022</span>
      </div>
    </>
  );
}
export default App;