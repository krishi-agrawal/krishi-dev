import React from 'react'
import "./Skills.css"
import SkillCard from "../SkillCard/SkillCard.jsx"
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <div className='__skills-section'>
            <div className='skills-backglow'>
                <img src='./../skills-backglow.png'></img>
            </div>
            <motion.h1 className='skills-h1'
            initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type:"spring", stiffness:80, ease:"easeIn"}}>My skills</motion.h1>
            <SkillCard />
        </div>
    )
}

export default Skills