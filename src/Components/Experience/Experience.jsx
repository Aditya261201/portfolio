import React from 'react'
import {skil} from '../../data/skills';
import './Experience.css';



const Experience = () => {
    return (
        <section className='expcontainer' id='experience'>
        <h2 className='title'>Skills</h2>
                <div className='iconscontainer'>
                    <div className='icons'>{
                    skil.map((item,id) => { 
                        return <div data-aos="fade-up"
                            data-aos-anchor-placement="center-center" key={id} className='skill'>
                            <img src={item.imageSrc} alt={item.title} className='skillimg'/>
                            <h3 className='skilltitle'>{item.title}</h3>
                        </div>
                    })
                    }</div>
                </div>
        </section>
    )
}

export default Experience
