import React from 'react'
import './ProjectCard.css';

const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source} }) => {
    return (
        <div data-aos="zoom-in" className='cardcontainer'>
        <img src={imageSrc} alt={`Image of ${title}`} className='cardimg'/>
        <h3 className='cardtitle'>{title}</h3>
        <p className='carddesc'>{description}</p>
        <ul className='cardlist'>{
                skills.map((skill, id) => {
                return(
                    <li key={id} className='cardlistitem'>{skill}</li>
                );
            })
        }</ul>
        <div className='links'>
            <a href={demo} className='demolink'>Demo</a>
            <a href={source} className='scodelink'>Source code</a>
        </div>
    </div>
    )
}

export default ProjectCard
