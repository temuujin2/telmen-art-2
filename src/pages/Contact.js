import imgBack_about from '../images/BGGGG.png'
import face from '../images/icons/facebook.png'
import insta from '../images/icons/instagram.png'
import linkedin from '../images/icons/linkedin.png'
import twitter from '../images/icons/twitter.png'
import youtube from '../images/icons/youtube.png'
import art from '../images/icons/art.png'

export const Contact = () => {
    return (
        <div className='contact-wrapp'>
            <h4>CONTACT</h4>
            <div className='social-wrapp'>
                <a href="https://www.artstation.com" rel="noreferrer" target="_blank"><img src={art} alt='for contact'></img></a>
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={insta} alt='for contact'></img></a>
                <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><img src={youtube} alt='for contact'></img></a>
                <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><img src={twitter} alt='for contact'></img></a>
                <a href="https://www.linkedin.com" rel="noreferrer" target="_blank"><img src={linkedin} alt='for contact'></img></a>
                <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src={face} alt='for contact'></img></a>
            </div>
            <form>
                <div className='input-wrapp'>
                    <label>
                        FIRST AND LAST NAME
                        <input></input>
                    </label>
                    <label>
                        EMAIL ADDRESS
                        <input></input>
                    </label>
                    <label>
                        SUBJECT
                        <input></input>
                    </label>
                    <span>
                        <p>Ulaanbaatar, Mongolia</p>
                        <p><b style={{ color: "gray" }}>Tel:</b> +976-99269912</p>
                        <p><b style={{ color: "gray" }}>Email:</b> Chonttelmen1@gmail.com</p>
                    </span>
                </div>
                <div className='subject-input'>
                    <label>
                        SUBJECT
                        <input></input>
                    </label>
                    <button>send message</button>
                </div>
            </form>

            <img className="back-img-totem" src={imgBack_about} alt="for background"></img>
        </div>
    )
}