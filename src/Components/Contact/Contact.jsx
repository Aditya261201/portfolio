import React from 'react'
import './Contact.css';
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from "react-icons/ai";


const Contact = () => {
    return (
        <section className='contactcontainer' id='contact'>
            <div className="contacthead">
                <h2>CONTACT</h2>
                <h3>Feel free to reach out..</h3>
            </div>
            <div className="contactinfo">
                <ul>
                    <li className='infos'>
                        <AiFillLinkedin />
                        <a href='https://www.linkedin.com/in/aditya-kumar-527094214/' target='_blank'>Linked In</a>
                    </li>
                    <li className='infos'>
                        <AiOutlineMail />
                        <a href='mailto:adityakumarrajput01@gmail.com' target='_blank'>Mail</a>
                    </li>
                    <li className='infos'>
                        <AiFillGithub />
                        <a href='https://github.com/Aditya261201' target='_blank'>Github</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Contact
