// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// // Importing svg
// import info from "../../assets/svg/info.svg";

// export default function Card({ title, skills }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleCardClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const handleOverlayClick = (e) => {
//     // Close the card if clicking outside of the expanded content
//     if (e.target === e.currentTarget) {
//       setIsExpanded(false);
//     }
//   };

//   return (
//     <>
//       <div className="relative mb-2">
//         <div
//           onClick={handleCardClick}
//           role="button"
//           tabIndex="0"
//           className="h-40 border dark:border-dark-200 border-dark-850 cursor-pointer rounded-md p-4 shadow-md hover:scale-110 duration-500 ease-in-out"
//         >
//           <img
//             src={info}
//             alt="Click for more info"
//             className="h-6 w-6 absolute"
//           />
//           <h2 className="text-center text-lg font-semibold mb-4 w-9/12 mx-auto truncate">
//             {title}
//           </h2>
//           <div className="duration-500 ease-in-out grid grid-cols-2 gap-2">
//             {skills.slice(0, 4).map((skill, index) => (
//               <img
//                 key={index}
//                 src={skill.icon}
//                 alt={skill.name}
//                 title={skill.name}
//                 className="h-10 w-10 mx-auto"
//               />
//             ))}
//           </div>
//         </div>
//         <AnimatePresence>
//           {isExpanded && (
//             <motion.div
//               initial={{ opacity: 0, scale: 1 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 1 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-y-scroll overflow-x-hidden absolute inset-0 z-10"
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 1 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="dark:bg-dark-950 bg-dark-150 border border-dark-200 w-full rounded-md p-4 shadow-md"
//               >
//                 <button
//                   onClick={handleCardClick}
//                   aria-label="Close card"
//                   className="h-6 w-6 absolute top-2 right-2"
//                 >
//                   &#10006;
//                 </button>
//                 <ul className="mt-2 grid grid-cols-2 gap-4">
//                   {skills.map((skill, index) => (
//                     <li
//                       key={index}
//                       className="grid grid-cols-3 gap-0 items-center"
//                     >
//                       <img
//                         src={skill.icon}
//                         alt={skill.name}
//                         title={skill.name}
//                         className="h-10 w-10"
//                       />
//                       <span className="text-lg col-span-2">{skill.name}</span>
//                       <span className="col-span-3 truncate">
//                         Years: {skill.years}
//                       </span>
//                       <div className="w-full col-span-2 border border-dark-400">
//                         <div
//                           className="h-2 w-full bg-theme-fill wave-animation"
//                           style={{
//                             width: `${((skill.years + 3) / 8) * 100}%`,
//                           }}
//                         ></div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="flex justify-center">
//                   <button
//                     onClick={handleCardClick}
//                     aria-label="Close card"
//                     className="text-center hover:scale-90 duration-500 ease-in-out text-lg mt-4"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import info from "../../assets/svg/info.svg";

export default function Card({ title, skills }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isExpanded]);

  return (
    <>
      <div className="relative mb-2">
        <div
          onClick={handleCardClick}
          role="button"
          tabIndex="0"
          className="h-40 border dark:border-dark-200 border-dark-850 cursor-pointer rounded-md p-4 shadow-md hover:scale-110 duration-500 ease-in-out"
        >
          <img
            src={info}
            alt="Click for more info"
            className="h-6 w-6 absolute"
          />
          <h2 className="text-center text-lg font-semibold mb-4 w-9/12 mx-auto">
            {title}
          </h2>
          <div className="duration-500 ease-in-out grid grid-cols-2 gap-2">
            {skills.slice(0, 4).map((skill, index) => (
              <img
                key={index}
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                className="h-10 w-10 mx-auto"
              />
            ))}
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleOverlayClick}
              className="fixed inset-0 z-10 flex items-center justify-center bg-dark-950 dark:bg-opacity-60 bg-opacity-30"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="dark:bg-dark-950 bg-dark-150 border border-dark-200 w-full max-w-lg rounded-md p-4 shadow-md relative"
              >
                <button
                  onClick={handleCardClick}
                  aria-label="Close card"
                  className="h-6 w-6 absolute top-1 right-1"
                >
                  &#10006;
                </button>
                <ul className="mt-2 grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-3 gap-0 items-center"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        title={skill.name}
                        className="h-10 w-10"
                      />
                      <span className="text-lg col-span-2">{skill.name}</span>
                      <span className="col-span-3">Years: {skill.years}</span>
                      <div className="w-full col-span-2 border border-dark-400">
                        <div
                          className="h-2 w-full bg-theme-fill"
                          style={{
                            width: `${((skill.years + 3) / 8) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center">
                  <button
                    onClick={handleCardClick}
                    aria-label="Close card"
                    className="text-center hover:scale-90 duration-500 ease-in-out text-lg mt-4"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
