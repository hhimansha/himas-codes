// src/components/Header/Nav/index.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { menuSlide } from '../anim';
import Curve from './Curve';
import Footer from './Footer';
import Link from './Link';

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
      <div className=" mx-auto  my-auto">
        <div className="flex flex-col space-y-10 text-5xl text-white my-auto">
        <Link data={{ title: 'Home', href: '/', index: 0 }} />
        <Link data={{ title: 'Projects', href: '/', index: 1 }} />
        <Link data={{ title: 'Services', href: '/', index: 2 }} />
        <Link data={{ title: 'Contact', href: '/', index: 3 }} />
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
