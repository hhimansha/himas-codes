import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useScroll } from "framer-motion";
import MagneticEffect from "./MagneticEffect";
import { useRef } from "react";
import prof from "../assets/prof.png";
import proj1Img from "../assets/mediamodifier_image.png";

export default function ProjectsContact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })

    return (
        <div>
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
            // style={{ scale }}
            className="flex relative flex-wrap max-w-screen-2xl h-fit gap-40 mx-auto items-center justify-center"
        >
            <div className="flex flex-wrap md:gap-20 gap-10 mb-40">
                <div className="md:mx-auto mx-auto font-bold text-black md:my-10 my-0 md:top-40  top-20  lg:sticky h-full">
                    <h1 className="xl:text-6xl lg:text-8xl md:text-7xl sm:text-6xl xs: text-6xl ">
                        PROJECTS
                    </h1>
                    <div className="grid gap-10 mt-10">
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Frontend<span className="text-sm">Third eye creativity</span></h1>
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Backend<span className="text-sm">Third eye creativity</span></h1>
                        <h1 className="lg:text-4xl text-3xl font-semibold grid">Full-stack<span className="text-sm">Third eye creativity</span></h1>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:col-span-2 md:gap-8 md:mt-10 mt-0 mx-auto">
                    <div class=" flex w-full  flex-col overflow-hidden rounded-2xl border ">
                        <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <img class=" h-80 " src={proj1Img} alt="product image" />
                        </a>
                        <div class="mt-4 px-5 pb-5">
                            <a href="#" className="grid">
                                <h5 class="text-xl tracking-tight font-semibold text-black">Nike Air / <span className="text-gray-300 font-semibold">Web Application</span></h5>
                                <h4 className="text-sm text-gray-400">Tech stack - MongoDB,Express JS, React JS, Node JS</h4>
                            </a>

                        </div>
                    </div>
                    


                    <div class=" flex w-full  flex-col overflow-hidden rounded-2xl border ">
                        <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <img class=" h-80 " src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                        </a>
                        <div class="mt-4 px-5 pb-5">
                            <a href="#" className="grid">
                                <h5 class="text-xl tracking-tight font-semibold text-black">Nike Air / <span className="text-gray-300 font-semibold">Web Application</span></h5>
                                <h4 className="text-sm text-gray-400">Tech stack - MongoDB,Express JS, React JS, Node JS</h4>
                            </a>

                        </div>
                    </div>
                    <div class=" flex w-full  flex-col overflow-hidden rounded-2xl border ">
                        <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <img class=" h-80 " src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                        </a>
                        <div class="mt-4 px-5 pb-5">
                            <a href="#" className="grid">
                                <h5 class="text-xl tracking-tight font-semibold text-black">Nike Air / <span className="text-gray-300 font-semibold">Web Application</span></h5>
                                <h4 className="text-sm text-gray-400">Tech stack - MongoDB,Express JS, React JS, Node JS</h4>
                            </a>

                        </div>
                    </div>
                    <div class=" flex w-full  flex-col overflow-hidden rounded-2xl border ">
                        <a class="relative mx-3 mt-3 flex h-80 overflow-hidden rounded-xl" href="#">
                            <img class=" h-80 " src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                        </a>
                        <div class="mt-4 px-5 pb-5">
                            <a href="#" className="grid">
                                <h5 class="text-xl tracking-tight font-semibold text-black">Nike Air / <span className="text-gray-300 font-semibold">Web Application</span></h5>
                                <h4 className="text-sm text-gray-400">Tech stack - MongoDB,Express JS, React JS, Node JS</h4>
                            </a>

                        </div>
                    </div>

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
            // style={{ scale }}
            className="flex relative flex-wrap max-w-full md:gap-40 gap-10 mx-auto  rounded-t-[60px] items-center justify-center bg-gray-200 ">
            <div className="grid gap-4 justify-center my-32">
                <div className="flex items-center gap-4 mx-auto sm:justify-center sm:w-full w-80">
                    <img src={prof} alt="Profile" className="w-20" />
                    <h1 className="md:text-7xl text-4xl font-semibold text-black">Let's work together</h1>
                </div>
                <ul className="md:flex justify-center gap-20 text-black text-4xl mx-auto mt-10 pb-5">
                    <MagneticEffect>
                        <a href="https://github.com/hhimansha" target="_blank"><li className="flex items-center gap-4 hover:border-b-4 transition-all  ease-in-out">GitHub</li></a>
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
                        <button className="p-10 rounded-full font-semibold text-xl border-2 border-black text-white bg-black hover:bg-black hover:text-white transition-colors duration-500 ease-in-out">+94-71-252-8831</button>
                    </MagneticEffect>
                    <MagneticEffect>
                        <button className="p-10 rounded-full font-semibold text-xl border-2 border-black text-white bg-black hover:bg-black hover:text-white transition-colors duration-500 ease-in-out">himanshainfo@gmail.com</button>
                    </MagneticEffect>
                </div>
            </div>


        </motion.div>
    )
}