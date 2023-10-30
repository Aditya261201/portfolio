import React from 'react'
import './About.css';
import about from './about.png';


const About = () => {
    return (
        <section>
            <div data-aos="fade-up" className="aboutcontainer" id='about'>
                <div data-aos="fade-right" className='aboutimage'>
                    <img src={about}/>
                </div>
                <div data-aos="fade-left" className='aboutdata'>
                <h2 className='aboutheading'>ABOUT</h2>
                    <ul>
                        <li>
                            <h3>Masters in Computer Applications(MCA)</h3>
                            <h4></h4>
                            <p>Vellore Institute of Technology (VIT Vellore)</p>
                        </li>
                        <li>
                            <h3>BSc Computer Science Hons.</h3>
                            <h4>Grade : 8.7</h4>
                            <p>Aryabhatta College (University Of Delhi)</p>
                        </li>
                        <li>
                            <h3>HSC (12th)</h3>
                            <h4>Percentage : 93.6%</h4>
                            <p>D.A.V Public School(Baghpat , UP)</p>
                        </li>
                        <li>
                            <h3>SSC (10th)</h3>
                            <h4>Percentage : 93%</h4>
                            <p>D.A.V Public School(Baghpat , UP)</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default About
