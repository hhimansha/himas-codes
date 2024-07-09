import React, { useEffect } from "react";
import { motion } from "framer-motion";
import MagneticEffect from "./MagneticEffect";
import { Link } from "react-scroll";


export default function Header() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <header className="max-w-full bg-white">
            <div className="flex max-w-screen-xl top-0 sticky flex-col overflow-hidden px-4 py-6 md:mx-auto md:flex-row md:items-center">
                <MagneticEffect className="flex items-center whitespace-nowrap text-xl">
                    <motion.a
                        href="#"
                        className="font-semibold flex items-center gap-1"
                    >
                        <motion.svg
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 360 }}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-copyright"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                        </motion.svg>
                        Hima's Codes
                    </motion.a>
                </MagneticEffect>

                <input type="checkbox" className="peer hidden" id="navbar-open" />
                <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </label>
                <nav
                    aria-label="Header Navigation"
                    className="flex max-h-0 w-full flex-col items-center justify-between  transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
                >
                    <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
                        <MagneticEffect className="font-semibold mx-6 text-l">
                            <motion.li>
                                <Link to="home" smooth={true} duration={1000}><button className="hover:border-b-4 transition-all  ease-in-out">Home</button></Link>
                            </motion.li>
                        </MagneticEffect>
                        <MagneticEffect className="font-semibold mx-6 text-l">
                            <li>
                                <Link to="projects" smooth={true} duration={1000}><button className="hover:border-b-4 transition-all  ease-in-out">Projects</button></Link>
                            </li>
                        </MagneticEffect>
                        <MagneticEffect className="font-semibold mx-6 text-l">
                            <li>
                                <a href="#" className="hover:border-b-4 transition-all  ease-in-out">Blogs</a>
                            </li>
                        </MagneticEffect>
                        <MagneticEffect className="font-semibold mx-6 text-l">
                            <Link to="contacts" smooth={true} duration={1000}>
                            <li>
                                <button className="font-semibold px-4 py-2  bg-black rounded-full text-white ">Contact</button>
                            </li>
                            </Link>
                        </MagneticEffect>
                    </ul>
                </nav>
            </div>
        </header>
    );
}