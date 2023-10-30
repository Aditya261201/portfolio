import React from 'react'
import './Project.css';
import { projs } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <section className='projectcontainer' id='projects'>
            <h2 className='title'>Projects</h2>
            <div className="projects">{
                projs.map((project, id) => {
                    return<ProjectCard key={id} project={project}/>
                })
            }</div>
        </section>
    )
}

export default Project
