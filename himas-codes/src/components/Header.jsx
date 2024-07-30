// Header.sx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import ToggleMenu from "./HeaderNew";
import MagneticEffect from "./MagneticEffect";
import { Link } from "react-scroll";

export default function Header() {
    const [isHeaderOutOfView, setIsHeaderOutOfView] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHeaderOutOfView(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observer.unobserve(headerRef.current);
            }
        };
    }, []);

    const controls = useAnimation();

    useEffect(() => {
        controls.start({ rotate: 0 });
    }, [controls]);

    return (
        <>
        <header ref={headerRef} className="max-w-full bg-gray-200 hidden md:block">
            <div className="flex max-w-screen-xl top-0 sticky border-b border-gray-400 flex-col overflow-hidden px-4 py-6 md:mx-auto md:flex-row md:items-center">
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
                                <a href="#" className="hover:border-b-4 transition-all  ease-in-out">Services</a>
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
                                    <motion.button
                                        className="font-semibold px-3 py-2 flex items-center bg-black rounded-full text-white"
                                        onHoverStart={() => controls.start({ rotate: 45 })}
                                        onHoverEnd={() => controls.start({ rotate: 0 })}
                                    >
                                        Contact
                                        <motion.span
                                            className="ml-2"
                                            animate={controls}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="black"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide lucide-arrow-down-right bg-white rounded-full"
                                            >
                                                <path d="m7 7 10 10" />
                                                <path d="M17 7v10H7" />
                                            </svg>
                                        </motion.span>
                                    </motion.button>                            
                                </li>
                            </Link>
                        </MagneticEffect>
                    </ul>
                </nav>
            </div>
        </header>
        {isHeaderOutOfView && <ToggleMenu  />}
        </>
    );
}
