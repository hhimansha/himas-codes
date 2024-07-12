import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import MagneticEffect from "./MagneticEffect";
import { useRef } from "react";
import prof from "../assets/prof.png";

export default function ProjectsContact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    return (
        <div ref={container} className="relative h-[350vh]">
            <Projects scrollYProgress={scrollYProgress} />
            <Contact scrollYProgress={scrollYProgress} />

        </div>
    )
}

const Projects = ({ scrollYProgress }) => {

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

    return (
        <motion.div
            id="projects"
            style={{ scale }}
            className="flex relative flex-wrap max-w-full h-fit gap-40 mx-auto items-center justify-center bg-black z-40"
        >
            <div className="flex flex-wrap md:gap-40 gap-20">
                <h1 className="xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl xs: text-6xl md:mx-auto mx-auto font-bold text-white md:my-80 my-0 md:top-80 mt-24 top-20 sticky h-full">
                    PROJECTS
                </h1>
                <div className="grid gap-4 md:mt-80 mt-0 mx-auto">
                    <MagneticEffect>
                    <div className="group relative m-10 h-96 w-96 overflow-hidden  shadow-md bg-white">
                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out ">
                            <img
                                className="h-4/6 w-full object-cover"
                                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                                Portugal's Hot Baloon Festival
                            </h1>
                            <p className="mt-1 px-4 text-center text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
                            </p>
                        </div>
                        
                    </div>
                    </MagneticEffect>
                    <MagneticEffect>
                    <div className="group relative m-10 h-96 w-96 overflow-hidden  shadow-md bg-white">
                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out ">
                            <img
                                className="h-4/6 w-full object-cover"
                                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                                Portugal's Hot Baloon Festival
                            </h1>
                            <p className="mt-1 px-4 text-center text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
                            </p>
                        </div>
                        
                    </div>
                    </MagneticEffect>
                    <MagneticEffect>
                    <div className="group relative m-10 h-96 w-96 overflow-hidden  shadow-md bg-white">
                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out ">
                            <img
                                className="h-4/6 w-full object-cover"
                                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                                Portugal's Hot Baloon Festival
                            </h1>
                            <p className="mt-1 px-4 text-center text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
                            </p>
                        </div>
                        
                    </div>
                    </MagneticEffect>
                    <MagneticEffect>
                    <div className="group relative m-10 h-96 w-96 overflow-hidden shadow-md bg-white">
                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out ">
                            <img
                                className="h-4/6 w-full object-cover"
                                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                                Portugal's Hot Baloon Festival
                            </h1>
                            <p className="mt-1 px-4 text-center text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
                            </p>
                        </div>
                        
                    </div>
                    </MagneticEffect>
                    <MagneticEffect>
                    <div className="group relative m-10 h-96 w-96 overflow-hidden  shadow-md bg-white">
                        <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out ">
                            <img
                                className="h-4/6 w-full object-cover"
                                src="https://images.unsplash.com/photo-1660648127319-3f071bbac474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                            <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
                                Portugal's Hot Baloon Festival
                            </h1>
                            <p className="mt-1 px-4 text-center text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, saepe.
                            </p>
                        </div>
                        
                    </div>
                    </MagneticEffect>
                </div>
            </div>
        </motion.div>
    )
}

const Contact = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);
    
    return (
        <motion.div
            id="contacts"
            style={{ scale }}
            className="flex relative flex-wrap max-w-full md:gap-40 gap-10 mx-auto  h-[100vh] items-center justify-center  bg-black">
            <div className="grid gap-4 justify-center ">
                <div className="flex items-center gap-4 mx-auto sm:justify-center sm:w-full w-80">
                    <img src={prof} alt="Profile" className="w-20"/>
                    <h1 className="md:text-7xl text-4xl font-semibold text-white">Let's work together</h1>
                </div>
                <ul className="md:flex justify-center gap-20 text-white text-4xl mx-auto mt-10 pb-5">
                    <MagneticEffect>
                    <a href="https://github.com/hhimansha" target="_blank"><li  className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">GitHub</li></a>
                    </MagneticEffect>
                    <MagneticEffect>
                    <a href="https://www.linkedin.com/in/harithahimansha/" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">LinkedIn</li></a>
                    </MagneticEffect>
                    <MagneticEffect>
                    <a href="https://github.com/hhimansha" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">Medium</li></a>
                    </MagneticEffect>
                </ul>
                <div className="flex gap-10 justify-center mt-10 flex-wrap">
                <MagneticEffect>
                    <button className="p-10 rounded-full font-semibold text-xl border text-white bg-black hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">+94-71-252-8831</button>
                </MagneticEffect>
                <MagneticEffect>
                    <button className="p-10 rounded-full font-semibold text-xl border text-white bg-black hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">himanshainfo@gmail.com</button>
                </MagneticEffect>
            </div>
            </div>
            

        </motion.div>
    )
}