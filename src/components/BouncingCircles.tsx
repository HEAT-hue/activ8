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

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface CircleProp {
  size: number,
  strokeWidth: number,
  zIndex: number,
  className: string
}

const Circle: React.FC<CircleProp> = ({ size, strokeWidth, zIndex, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    const animateCircle = () => {
      if (typeof window !== 'undefined') {
        const newX = Math.random() * (window.innerWidth - size);
        const newY = Math.random() * (window.innerHeight - size);

        try {
          controls.start({
            x: newX,
            y: newY,
            transition: {
              duration: Math.random() * 10 + 5, // Duration between 5s to 15s for smooth motion
              ease: 'easeInOut',
            },
          }).then(animateCircle); // Continuously animate
        } catch (error) {
          console.error(error);
        }
      }
    };

    animateCircle(); // Start animation
  }, [controls, size]);

  return (
    <motion.svg
      animate={controls}
      initial={{
        x: typeof window !== 'undefined' ? Math.random() * (window.innerWidth - size) : 0,
        y: typeof window !== 'undefined' ? Math.random() * (window.innerHeight - size) : 0,
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
};

const BouncingCircles = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Circle size={500} strokeWidth={90} zIndex={3} className="hidden md:block" />
      <Circle size={500} strokeWidth={90} zIndex={2} className="hidden md:block" />
      <Circle size={250} strokeWidth={45} zIndex={2} className="block" />
      <Circle size={250} strokeWidth={45} zIndex={1} className="block" />
    </div>
  );
};

export default BouncingCircles;