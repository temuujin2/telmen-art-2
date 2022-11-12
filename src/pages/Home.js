
import Slide from 'react-reveal/Slide';
import FadeScroll from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import generic from '../images/generic-portfolio.png'
import videoBg from '../video/All_9generals_1_1.mp4'
import Tenger from '../images/Tengeriin_Daira.png'
import subeedei from '../images/Subegedei.png'
import Portrait from '../images/Portrait.png'
import Sarwuu from '../images/Sarwuu.png'
import About from '../images/About.png'
import BIIR from '../images/BIIR_X.png'
import { useEffect } from 'react'
import React from 'react'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  Move,
  ZoomIn,
} from "react-scroll-motion";


export const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <div className='screen-items-wrapp'>
          <img className='biir' src={BIIR} alt="video" />
          <h1>DIGITAL CREATOR</h1>
          <img className='generic' src={generic} alt="video" />
        </div>
        <div className="main-video">

          <div className='main-bg-hero'></div>
          <video src={videoBg} autoPlay muted loop />
        </div >

      </ScrollPage>


      {/* ----------------------- Page 2 -------------------- */}
      <ScrollPage page={1}>
        <Animator>
          <div className='page-2'>
            <Animator>
              <div className='avatar-circle'>
                <img src={Portrait} alt="portrait" />
              </div>
            </Animator>
            <div className='page-2-text'>
              <Animator animation={batch(FadeIn(), Move(0, 1000))}>
                <b>Brief</b>
                <Animator animation={ZoomIn}>
                  <div className='page-2-p'>
                    <p>Hello everyone! My name's Telmen Bayasgalan</p>
                    <p>I'm a digital artist.</p>
                    <p>I reside in Ulaanbaatar, Mongolia.</p>
                    <p>Truly, I self-taught about "CG art".</p>
                    <p>It's give me a chance that l float on my imagination.</p>
                  </div>
                </Animator>
                <button>more info</button>
              </Animator>
            </div>
            <img className='bg-about-img' src={About} alt="for background" />
            <img className='sarwuu' src={Sarwuu} alt="for background" />
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 3 -------------------- */}
      <ScrollPage page={2}>
        <Animator>
          <div className='page-3'>
          <Slide left>
              <p></p>
              <b>Stl, Obj files</b>
          </Slide>
            <img src={subeedei} alt="for back-bg" />
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 4 -------------------- */}
      <ScrollPage page={2}>
        <Animator>
          <div className='page-4'>
            <b>Shop</b>
        <FadeScroll bottom big cascade>
            <div className='home-shop-btn'>
              <div>Prints
                <div className='shape-shop'></div>
              </div>
              <div>3D model
                <div className='shape-shop'></div>
              </div>
              <div>Collectibles
                <div className='shape-shop'></div>
              </div>
              <div>Merch
                <div className='shape-shop'></div>
              </div>
              <div>Tutorials
                <div className='shape-shop'></div>
              </div>
            </div>
          </FadeScroll>
            <img src={subeedei} alt="for back-bg" />
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 5 -------------------- */}
      <ScrollPage page={2}>
        <Animator >
          <div className='page-5'>
            <Roll left>
              <b>You can buy my limited art prints</b>
              <p>10% of your purchase</p>
              <span>will be donated to children's charities</span>
            </Roll>
            <img src={Tenger} alt="for back-bg" />
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 6 -------------------- */}
      <ScrollPage page={2}>
        <Animator>
          <div className='page-4'>
            <span>GOLDEN TICKET</span>
            <button>learn more</button>
            <img src={Tenger} alt="for back-bg" />
          </div>
        </Animator>
      </ScrollPage>
      {/* scroll to top on button click */}
      <button className='scroll-btn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          position: 'fixed',
          padding: '5px 10px 0 10px',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'rgb(31, 32, 39)',
          color: '#fff',
          textAlign: 'center',
          border: 'none',
          borderRadius: '10px'
        }}
      >
        <ExpandLessIcon />
      </button>

    </ScrollContainer>

  )
}
