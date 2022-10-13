
import React from 'react'
import generic from '../images/generic-portfolio.png'
import videoBg from '../video/All_9generals_1_1.mp4'
import imgBack2 from '../images/back-2.jpeg'
import Portrait from '../images/Portrait.png'
import Sarwuu from '../images/Sarwuu.png'
import About from '../images/About.png'
import BIIR from '../images/BIIR_X.png'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  Sticky,
  ZoomOut,
  FadeOut
} from "react-scroll-motion";

const ZoomInScrollOut = batch(Sticky(), Fade(), ZoomOut());
const FadeUp = batch(Fade(), MoveIn());

export const Home = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <div className='screen-items-wrapp'>
          <img className='biir' src={BIIR} alt="video"/>
          <h1>DIGITAL CREATOR</h1>
          <img className='generic' src={generic} alt="video"/>
        </div>
        <div className="main-video">
         
          <div className='main-bg-hero'></div>
            <video src={videoBg} autoPlay muted loop />
        </div >
         
      </ScrollPage>


      {/* ----------------------- Page 2 -------------------- */}
      <ScrollPage page={1}>
        <Animator animation={FadeUp}>
          <div className='page-2'>
            <Animator>
              <div className='avatar-circle'>
                <img src={Portrait} alt="portrait"/>
              </div>
            </Animator>
            <div className='page-2-text'>
              <Animator animation={batch(FadeIn(), Move(0, 1000))}>
                <b>Brief</b>
                <div className='page-2-p'>
                  <p>Hello everyone! My name's Telmen Bayasgalan</p>
                  <p>I'm a digital artist</p>
                  <p>I reside in Ulaanbaatar, Mongolia.</p>
                  <p>Truly, I self-taught about "CG art".</p>
                  <p>It's give me a chance that l float on my imagination.</p>
                </div>
                <button>more info</button>
              </Animator>
            </div>
            <img className='bg-about-img' src={About} alt="for background"/>
            <img className='sarwuu' src={Sarwuu} alt="for background"/>
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 3 -------------------- */}
      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <div className='page-3'>
            <b style={{ color: "white" }}>Third Page</b>

            <img src={imgBack2}alt="for back-bg"/>
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 4 -------------------- */}

    </ScrollContainer>

  )
}
