
import React from 'react'
import videoBg from '../video/All_9generals_1_1.mp4'
import imgBack from '../images/back-1.jpeg'
import imgBack2 from '../images/back-2.jpeg'
import hvree from '../images/hvree_har.png'
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
  ZoomOut
} from "react-scroll-motion";

const ZoomInScrollOut = batch(Sticky(), Fade(), ZoomOut());
const FadeUp = batch(Fade(), MoveIn());

export const Home = () => {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>

        <div className="main-video">
        <div className='main-bg-hero'></div>
          <video src={videoBg} autoPlay muted loop />
        </div >
      </ScrollPage>


      {/* ----------------------- Page 2 -------------------- */}
      <ScrollPage page={1}>
        <Animator animation={FadeUp}>
          <div className='page-2'>
            <Animator animation={batch(FadeIn(), Move(0, -200))}>
              <div className='avatar-circle'>

              </div>
            </Animator>
            <div className='page-2-text'>
              <Animator animation={batch(FadeIn(), Move(-500, 0))}>
                <b>Brief</b>
                <p>Hello everyone! My name's Telmen Bayasgalan</p>
                <p>I'm a digital artist</p>
                <p>I reside in Ulaanbaatar, Mongolia.</p>
                <p>Truly, I self-taught about "CG art".</p>
                <p>It's give me a chance that l float on my imagination.</p>
              </Animator>
              <button>more info</button>
            </div>

            <img src={imgBack} alt="for background"/>
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 3 -------------------- */}
      <ScrollPage page={2}>
        <Animator animation={ZoomInScrollOut}>
          <div className='page-3'>
            <b style={{ color: "white" }}>Third Page</b>

            <img src={imgBack2}alt="for back-bg"/>
          </div>
        </Animator>
      </ScrollPage>
      {/* ----------------------- Page 4 -------------------- */}
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className='page-4'>
            <b style={{ color: "white" }}>Fourth Page</b>


          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>

  )
}
