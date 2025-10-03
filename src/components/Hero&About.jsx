import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import profImage from "../assets/profImageblack.png";


export default function HeroAbout() {

    return (
        <>
            <div className="flex  bg-gray-200 rounded-b-[60px]  data-scroll-section">
                <div className="grid lg:flex gap-[5vw] max-w-screen-xl mx-auto lg:h-full h-full  items-center justify-center">
                    <div className="grid justify-center 2xl:gap-16 md:pt-10 lg:pt-0 xl:gap-16 lg:gap-16 md:gap-10 gap-4 p-8 md:p-0">
                        <div className="relative block ">
                            <h1 className="haritha 2xl:text-[75px] xl:text-[65px] lg:text-[65px] md:text-[60px] sm:text-[55px] text-[55px] leading-tight font-semibold">Haritha<br /> Himansha</h1>
                        </div>
                        <div className="relative overflow-hidden">
                            <div className="flex gap-3 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                </div>
                                <div className="font-semibold leading-snug text-lg">
                                    <p>Located in <br />Colombo, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src={profImage}
                            alt="Profile"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[400px] "
                        />
                    </div>


                    <div className="lg:grid 2xl:gap-10 xl:gap-10 hidden  lg:gap-10 md:gap-6 sm:py-10 py-10 sm:gap-6 gap-4 w-80">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right"><path d="m7 7 10 10" /><path d="M17 7v10H7" /></svg>
                        <div className="relative block overflow-hidden">
                            <h2 className="dev text-3xl font-semibold">Designer & Developer</h2>
                        </div>
                        <div className="relative block overflow-hidden">
                            <p className="location text-lg font-medium">I am an innovative designer and developer who is passionate about creating aesthetic and functional things</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="z-0 rounded-t-3xl  data-scroll-section">
                <div className="md:hidden 2xl:gap-10 mx-auto xl:gap-10 grid  lg:gap-10 md:gap-6 sm:py-10 py-10 sm:gap-6 gap-4 w-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-down-right"><path d="m7 7 10 10" /><path d="M17 7v10H7" /></svg>
                    <div className="relative block overflow-hidden">
                        <h2 className="dev text-3xl font-semibold">Designer & Developer</h2>
                    </div>
                    <div className="relative block overflow-hidden">
                        <p className="location text-lg font-medium">I am a designer and developer who is passionate about creating beautiful and functional websites.</p>
                    </div>
                </div>

                <div className="flex relative flex-wrap max-w-full pt-14  lg:gap-40 gap-10 mx-auto  h-full items-center justify-center bg-white">
                    {/* <div className="grid lg:gap-4 gap-2">
                <h2 className="lg-ml-0 ml-8 text-center text-3xl text-gray-900 font-bold ">This is me...</h2>
                <div className="relative block overflow-hidden">
                    <p className="about text-xl font-medium leading-7 max-w-screen-lg text-center lg:p-0 p-8 pt-0 md:mx-auto">I am a creative problem solver with a passion for making a positive impact. I find effective solutions to complex issues by turning obstacles into opportunities. With attention to detail and a focus on simplicity, I design strategies to tackle big problems. My commitment to continuous learning ensures that I bring fresh ideas and perspectives to every project.</p>
                </div>
            </div> */}

                </div>
            </div>
        </>
    );
}
