// import { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// interface CircleProp {
//   size: number,
//   strokeWidth: number,
//   zIndex: number,
//   className: string
// }

// const Circle: React.FC<CircleProp> = ({ size, strokeWidth, zIndex, className }) => {
//   const controls = useAnimation();

//   useEffect(() => {
//     const animateCircle = () => {
//       if (typeof window !== 'undefined') {
//         const newX = Math.random() * (window.innerWidth - size);
//         const newY = Math.random() * (window.innerHeight - size);

//         try {
//           controls.start({
//             x: newX,
//             y: newY,
//             transition: {
//               duration: Math.random() * 10 + 5, // Duration between 5s to 15s for smooth motion
//               ease: 'easeInOut',
//             },
//           }).then(animateCircle); // Continuously animate
//         } catch (error) {
//           console.error(error);
//         }
//       }
//     };

//     animateCircle(); // Start animation
//   }, [controls, size]);

//   return (
//     <motion.svg
//       animate={controls}
//       initial={{
//         x: typeof window !== 'undefined' ? Math.random() * (window.innerWidth - size) : 0,
//         y: typeof window !== 'undefined' ? Math.random() * (window.innerHeight - size) : 0,
//       }}
//       width={size}
//       height={size}
//       viewBox={`0 0 ${size} ${size}`}
//       xmlns="http://www.w3.org/2000/svg"
//       className={`absolute ${className}`} // Add the conditional className
//       style={{ zIndex }}
//     >
//       <motion.circle
//         cx={size / 2}
//         cy={size / 2}
//         r={size / 2 - strokeWidth / 2}
//         stroke="#FFE69A"
//         strokeWidth={strokeWidth}
//         fill="none"
//       />
//     </motion.svg>
//   );
// };

// const BouncingCircles = () => {
//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {/* Larger circles, hidden on small screens */}
//       <Circle size={500} strokeWidth={90} zIndex={3} className="hidden md:block" />
//       <Circle size={500} strokeWidth={90} zIndex={2} className="hidden md:block" />
//       {/* Smaller circles, always visible */}
//       <Circle size={250} strokeWidth={45} zIndex={2} className="block" />
//       <Circle size={250} strokeWidth={45} zIndex={1} className="block" />
//     </div>
//   );
// };

// export default BouncingCircles;

import React, { useEffect, useCallback, useState, useLayoutEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Custom hook for safe window dimensions
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

interface CircleProp {
  size: number;
  strokeWidth: number;
  zIndex: number;
  className: string;
}

const Circle: React.FC<CircleProp> = React.memo(({ size, strokeWidth, zIndex, className }) => {
  const controls = useAnimation();
  const [width, height] = useWindowSize();

  const animateCircle = useCallback(() => {
    const newX = Math.random() * (width - size);
    const newY = Math.random() * (height - size);

    controls.start({
      x: newX,
      y: newY,
      transition: {
        duration: Math.random() * 10 + 5,
        ease: 'easeInOut',
      },
    });
  }, [controls, size, width, height]);

  useEffect(() => {
    const abortController = new AbortController();
    const animate = () => {
      if (abortController.signal.aborted) return;
      animateCircle();
      setTimeout(animate, 15000);
    };
    animate();
    return () => {
      abortController.abort();
      controls.stop();
    };
  }, [animateCircle, controls]);

  return (
    <motion.svg
      animate={controls}
      initial={{
        x: Math.random() * (width - size),
        y: Math.random() * (height - size),
      }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${className}`}
      style={{ zIndex }}
    >
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2 - strokeWidth / 2}
        stroke="#FFE69A"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </motion.svg>
  );
});

const BouncingCircles: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Circle size={500} strokeWidth={40} zIndex={3} className="hidden md:block" />
      <Circle size={500} strokeWidth={40} zIndex={2} className="hidden md:block" />
      <Circle size={250} strokeWidth={40} zIndex={2} className="block" />
      <Circle size={250} strokeWidth={40} zIndex={1} className="block" />
    </div>
  );
};

export default BouncingCircles;