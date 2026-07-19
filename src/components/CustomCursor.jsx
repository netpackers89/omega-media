import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for lag effect
  const springConfig = { damping: 30, stiffness: 300, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Hover state detection
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const interactiveEl = target.closest('[data-cursor], a, button, select, input[type="submit"], input[type="button"]');
      
      if (interactiveEl) {
        const type = interactiveEl.getAttribute('data-cursor');
        if (type === 'play') {
          setCursorType('play');
          setCursorText('PLAY');
        } else if (type === 'view') {
          setCursorType('view');
          setCursorText('VIEW');
        } else {
          setCursorType('hover');
          setCursorText('');
        }
      } else {
        setCursorType('default');
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isHidden]);

  if (isHidden) return null;

  // Render cursor style variants based on type
  const variants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      borderColor: 'var(--color-gold)',
      borderWidth: 1.5,
    },
    hover: {
      width: 64,
      height: 64,
      backgroundColor: 'rgba(212, 175, 55, 0.1)',
      borderColor: 'var(--color-gold)',
      borderWidth: 2,
    },
    play: {
      width: 80,
      height: 80,
      backgroundColor: 'var(--color-gold)',
      borderColor: 'var(--color-gold)',
      borderWidth: 0,
      color: '#000000',
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'var(--color-gold-light)',
      borderColor: 'var(--color-gold)',
      borderWidth: 0,
      color: '#000000',
    }
  };

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 pointer-events-none rounded-full z-[9999] flex items-center justify-center font-bold text-xs tracking-wider"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={cursorType}
        variants={variants}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
      >
        {cursorText && (
          <span className="text-black select-none pointer-events-none font-bold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center dot (only visible on default and hover) */}
      {cursorType !== 'play' && cursorType !== 'view' && (
        <motion.div
          className="cursor-dot fixed top-0 left-0 pointer-events-none w-2 h-2 bg-gold rounded-full z-[10000]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;
