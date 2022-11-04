import imgBack_about from '../images/BGGGG.png'
import face from '../images/icons/facebook.png'
import insta from '../images/icons/instagram.png'
import linkedin from '../images/icons/linkedin.png'
import twitter from '../images/icons/twitter.png'
import youtube from '../images/icons/youtube.png'
import art from '../images/icons/art.png'
import discord from '../images/discord.png'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qgyablm',
            'template_sgwwoie',
            form.current,
            'AFAlw2B2klQDevaSf'
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contact-wrapp'>
            <h4>CONTACT</h4>
            <div className='social-wrapp'>
                <a href="https://www.artstation.com" rel="noreferrer" target="_blank"><img src={art} alt='for contact'></img></a>
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={insta} alt='for contact'></img></a>
                <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><img src={youtube} alt='for contact'></img></a>
                <a href="https://www.twitter.com" rel="noreferrer" target="_blank"><img src={twitter} alt='for contact'></img></a>
                <a href="https://www.linkedin.com" rel="noreferrer" target="_blank"><img src={linkedin} alt='for contact'></img></a>
                <a href="https://discord.gg/nJbkRfdV32" rel="noreferrer" target="_blank"><img src={discord} alt='for contact'></img></a>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='input-wrapp'>
                    <label>
                        FIRST AND LAST NAME
                        <input type="text" name="user_name"></input>
                    </label>
                    <label>
                        EMAIL ADDRESS
                        <input type="email" name="user_email"></input>
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
                        MESSAGE
                        <textarea name="message" />
                    </label>
                    <button type="submit" value="Send">Send</button>
                </div>
            </form>

            <img className="back-img-totem" src={imgBack_about} alt="for background"></img>
        </div>
    )
}