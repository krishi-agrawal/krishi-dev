import React from 'react'
import { motion } from "framer-motion"
import "./About.css"

const About = () => {
    return (
        <div className='__about-section'>
            <motion.h1 className='about-h1'
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 80, ease: "easeIn" }}>About Me</motion.h1>
            <div className='about-main'>
                <div className='about-img'>
                    <img src='./../krishi-blue-pic.jpg'></img>
                </div>
                <motion.div className='about-text'
                    initial={{ x: 200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 80, ease: "easeIn" }}
                >
                    <p>
                        Hi there! I'm Krishi Agrawal, a <div className='red'>passionate web developer</div> currently studying at IIIT Gwalior.
                        I have a keen interest in building modern and
                        responsive web applications using the latest technologies.
                    </p>
                    <br />
                    <p>
                        My journey in web development started in my first year of college.
                        Since then, I have been constantly learning and exploring new
                        technologies to improve my skills.
                    </p>
                    <br />
                    <p>
                        I also love to contribute to open-source projects and engage with the
                        developer community.
                    </p>
                </motion.div>

            </div>
            <div className='about-backglow'>
                <img src='./../about-backglow.png'></img>
            </div>
        </div>

    )
}

export default About