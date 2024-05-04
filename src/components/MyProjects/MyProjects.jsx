import React from 'react';
import Project from '../Project/Project';
import './MyProjects.css';
import { projects } from '../../data/data';
import {motion } from "framer-motion"

const MyProjects = () => {
    return (
        <div className='__projects-section'>
            <motion.h1 className='myprojects-h1'
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 80, ease: "easeIn" }}>My Projects</motion.h1>
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                />
            ))}
        </div>
    );
}

export default MyProjects;
