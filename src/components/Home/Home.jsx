import React from 'react'
import { motion } from "framer-motion"
import "./Home.css"
import Typewriter from 'typewriter-effect'
import Svg from '../Svg/Svg';

const Home = () => {
    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0,
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 4,
                ease: "easeInOut",
                delay: .2,
            }
        }
    }

    return (
        <div className='__home-section'>
            <div className='left-backglow'>
                <img src='./../left-backglow.svg'></img>
            </div>
            <div className='social-icons'>
                <a href='https://github.com/krishi-agrawal'>

                            <Svg vb="0 0 496 512" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </a>
                        <a href='https://www.linkedin.com/in/krishiagrawal/'>
                            <Svg vb="0 0 448 512" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                        </a>
                        <a href='https://leetcode.com/u/krishi26/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="80px" height="80px"><motion.path
                                variants={pathVariants}
                                initial="hidden"
                                whileInView="visible"
                                strokeWidth={0.5}
                                stroke="white"
                                // fill="grey"
                                d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z" /></svg>
                        </a>
                        </div>
            <div className='centre-text'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2.5, delay: .6, ease: "easeIn" }}>
                    Hi This is Krishi,
                </motion.h1>
                <motion.div className='desc'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2.5, delay: .6, ease: "easeIn" }}>
                    <h2>a </h2>
                    <Typewriter
                        options={{
                            strings: ['Full Stack Developer', 'Programmer', 'Blockchain Enthusiast', 'Graphic Designer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </motion.div>
                <div className='mouse'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_17_2061)">
                            <motion.path
                                variants={pathVariants}
                                initial="hidden"
                                whileInView="visible"
                                strokeWidth={1}
                                stroke="white"
                                d="M20 8.99995C19.96 4.60995 16.4 1.06995 12 1.06995C7.6 1.06995 4.04 4.60995 4 8.99995V14.9999C4 19.4199 7.58 22.9999 12 22.9999C16.42 22.9999 20 19.4199 20 14.9999V8.99995ZM18 8.99995H13V3.15995C15.81 3.62995 17.96 6.05995 18 8.99995ZM11 3.15995V8.99995H6C6.04 6.05995 8.19 3.62995 11 3.15995ZM18 14.9999C18 18.3099 15.31 20.9999 12 20.9999C8.69 20.9999 6 18.3099 6 14.9999V10.9999H18V14.9999Z" fill="#323232" />
                        </g>
                        <defs>
                            <clipPath id="clip0_17_2061">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

            </div>
            <div className='right-backglow'>
                <img src='./../back-glow.png'></img>
            </div>
        </div>
    )
}

export default Home