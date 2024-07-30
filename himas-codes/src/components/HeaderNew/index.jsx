import React, { useEffect, useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import MagneticEffect from '../MagneticEffect';
import Nav from './Nav';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [location.pathname]);

  return (
    <>
    <AnimatePresence mode="wait">
      <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.5 }} className="fixed right-0 p-8 z-50   md:top-10">
        <div
          onClick={() => setIsActive(!isActive)}
          className="w-20 h-20 z-40 bg-black rounded-full cursor-pointer flex items-center justify-center relative"
        >
          <motion.p  className={`text-white mb-4 ${isActive ? 'hidden ' : ''} `} >Menu</motion.p>
          <div
            className={`absolute w-2/3 h-0.5 bg-white transition-transform duration-300 ${isActive ? 'rotate-45 top-1/2' : 'mt-2 top-1/2'}`}
          ></div>
          <div
            className={`absolute w-2/3 h-0.5 bg-white transition-transform duration-300 ${isActive ? '-rotate-45 top-1/2' : ' mt-2 top-1/2'}`}
          ></div>
        </div>
      </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  );
};

export default Header;
