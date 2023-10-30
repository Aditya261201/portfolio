import React from 'react'
import './Hero.css';
import avatar from "./myAvatar.png";

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section className='container'>
            <div className='intro'>
                <div className='textdiv'>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'Hi, I\'m aditya',
                            1000,
                            'I\'m a web developer',
                            1000,
                            'I build things for the web',
                            1000,
                            'Exploring and learning new things....',
                            500,
                        ]}
                        speed={50}
                        style={{ fontSize: '4em' }}
                        repeat={Infinity}
                    />
                </div>
                <div data-aos="zoom-in" className='btndiv'>
                    <a href="mailto:myemail@gmail.com" className='contactbtn'>Contact me</a>
                </div>
            
            </div>

            <div className='avatar'>
                <img src={avatar} height={350} width={300} alt='hero image' />
            </div>
        </section>
    )
}

export default Hero
