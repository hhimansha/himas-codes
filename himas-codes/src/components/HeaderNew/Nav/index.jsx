import React from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Curve from './Curve';
import Footer from './Footer';
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

const Nav = () => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
      className="fixed top-0 right-0 sm:w-[500px] w-full h-full bg-black z-20 flex flex-col items-start p-8"
    >
      <Curve/>
      <div className="mx-auto my-auto">
        <div className="flex flex-col space-y-10 text-5xl text-white my-auto">
          <ScrollLink to="home" smooth={true} duration={1000}>
            <div className="cursor-pointer">Home</div>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={1000}>
            <div className="cursor-pointer">Projects</div>
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={1000}>
            <div className="cursor-pointer">Services</div>
          </ScrollLink>
          <ScrollLink to="contacts" smooth={true} duration={1000}>
            <div className="cursor-pointer">Contact</div>
          </ScrollLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
