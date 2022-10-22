import imgBack_about from '../images/BGGGG.png'





export const About = () => {
    return (
        <div className="about_wrapper">
            <h4>ABOUT</h4>
            <div className='text_wrapp_about'>
                <p style={{color:'white', fontSize:'19px'}}>
                    I was born in Baganuur district of Ulaanbaatar city in 1989.
                    In 2008 I graduated from the Rajiv Gandhi Polytechnic
                    College of Production and Arts as a graphic designer. 
                    I was freelancer artist since 2009. Since I graduated 
                    from the College I proceeded as a painter and a tattoo artist. 
                    However my passion remainedd with graphic design. Therefore 
                    since 2012 I started learning computer graphic on my own
                </p>
            </div>

            <img className="back-img-totem" src={imgBack_about} alt="for background"></img>

        </div>
    )
}