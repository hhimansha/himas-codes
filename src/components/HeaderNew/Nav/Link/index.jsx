// src/components/Header/Nav/Link/index.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';
import { useNavigate } from 'react-router-dom';

const Link = ({ data }) => {
  const { title, href, index } = data;
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => navigate(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={window.location.pathname === href ? 'open' : 'closed'}
        className="w-2.5 h-2.5 bg-white rounded-full absolute left-[-30px]"
      ></motion.div>
      <a href={href}>{title}</a>
    </motion.div>
  );
};

export default Link;
