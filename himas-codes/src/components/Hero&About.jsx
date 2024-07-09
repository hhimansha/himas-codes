import React, { useEffect } from "react";
import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import profImage from "../assets/profImageblack.png";
import anime from 'animejs';

export default function HeroAbout() {
    useEffect(() => {
        // Animation for initial text elements
        anime({
            targets: '.haritha, .dev, .location',
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo',
            delay: anime.stagger(100)
        });

        // Clean up anime.js animation on unmount
        return () => {
            anime.remove('.haritha, .dev, .location');
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.querySelector('.about');
            const rect = aboutSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView) {
                anime({
                    targets: '.about',
                    translateY: [100, 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo'
                });
                // Remove scroll event listener after animation is triggered
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={container} className="relative 2xl:h-[190vh] xl:h-[190vh] lg:h-full md:h-full h-full">
            <Hero scrollYProgress={scrollYProgress} />
            <About scrollYProgress={scrollYProgress} />
        </div>
    );
}

const Hero = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div id="home" style={{ scale, rotate }} className="flex top-0 sticky max-w-full bg-white">
            <motion.div className="flex flex-wrap flex-col max-w-screen-xl mx-auto 2xl:h-[90vh] xl:h-[90vh] lg:h-full h-full sm:py-4 py-4 items-center justify-center">
                <div className="grid 2xl:gap-16 xl:gap-16 lg:gap-16 md:gap-10 gap-4">
                    <div className="relative block overflow-hidden">
                        <h1 className="haritha 2xl:text-[75px] xl:text-[65px] lg:text-[65px] md:text-[60px] sm:text-[55px] text-[55px] leading-tight font-semibold">Haritha<br /> Himansha</h1>
                    </div>
                    <motion.div className="relative overflow-hidden">
                        <motion.div initial={{ y: 100 }} animate={{ y: 0 }} duration={1} className="flex gap-3 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div className="font-semibold leading-snug text-lg">
                                <p>Located in <br />Colombo, Sri Lanka</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex flex-col items-center">
                    <img src={profImage} alt="Profile" className="2xl:w-[78vh] xl:w-[67vh] lg:w-[55vh] md:w-[55vh] sm:w-[50vh] w-[50vh]" />
                </div>

                <div className="grid 2xl:gap-10 xl:gap-10 lg:gap-10 md:gap-6 sm:py-10 py-10 sm:gap-6 gap-4 w-80">
                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right"><path d="m7 7 10 10" /><path d="M17 7v10H7" /></motion.svg>
                    <div className="relative block overflow-hidden">
                        <h2 className="dev text-3xl font-semibold">Designer & Developer</h2>
                    </div>
                    <div className="relative block overflow-hidden">
                        <p className="location text-lg font-medium">I am a designer and developer who is passionate about creating beautiful and functional websites.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const About = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

    return (
        <motion.div style={{ scale, rotate }} className="flex relative flex-wrap max-w-full py-10 lg:gap-40 gap-10 mx-auto 2xl:h-[100vh] xl:h-[100vh] lg:h-[100vh] h-full items-center justify-center bg-white">
            <div className="grid lg:gap-4 gap-2">
                <h2 className="lg-ml-0 ml-8">This is me...</h2>
                <div className="relative block overflow-hidden">
                    <p className="about text-2xl font-semibold max-w-[800px] lg:p-0 p-8 pt-0 md:mx-auto">I am a creative and innovative problem solver, driven by a passion for making a positive impact. My unique approach to challenges allows me to find effective solutions to complex issues, turning obstacles into opportunities. With a keen eye for detail and a focus on simplicity, I thrive on designing strategies that address big problems with ease. My dedication to continuous learning and improvement ensures that I bring fresh ideas and perspectives to every project.</p>
                </div>
            </div>
            <div className="grid gap-4">
                <h2>What I do...</h2>
                <div className="grid gap-4">
                    <h1 className="lg:text-5xl text-7xl font-semibold grid">Frontend<span className="text-sm">Third eye creativity</span></h1>
                    <h1 className="lg:text-5xl text-7xl font-semibold grid">Backend<span className="text-sm">Third eye creativity</span></h1>
                    <h1 className="lg:text-5xl text-7xl font-semibold grid">Full-stack<span className="text-sm">Third eye creativity</span></h1>
                </div>
            </div>
        </motion.div>
    );
}