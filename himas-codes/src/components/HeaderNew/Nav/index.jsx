import React from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Curve from './Curve';
import Footer from './Footer';
import { Link as ScrollLink } from 'react-scroll';

const Nav = ({ closeMenu }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
      className="fixed top-0 right-0 sm:w-[500px] w-full h-full bg-black z-20 flex flex-col items-start p-8 shadow-xl"
    >
      <Curve/>
      <div className="mx-auto my-auto">
        <div className="flex flex-col  text-5xl text-white my-auto ">
          <ScrollLink to="home" className='p-6' smooth={true} duration={1000} onClick={closeMenu}>
            <div className="cursor-pointer ml-2 sm:ml-0">Home</div>
          </ScrollLink>
          <ScrollLink to="projects" className='p-6' smooth={true} duration={1000} onClick={closeMenu}>
            <div className="cursor-pointer ml-2 sm:ml-0">Projects</div>
          </ScrollLink>
          <ScrollLink to="services" className='p-6' smooth={true} duration={1000} onClick={closeMenu}>
            <div className="cursor-pointer ml-2 sm:ml-0">Services</div>
          </ScrollLink>
          <ScrollLink to="contacts" className='p-6' smooth={true} duration={1000} onClick={closeMenu}>
            <div className="cursor-pointer ml-2 sm:ml-0">Contact</div>
          </ScrollLink>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
