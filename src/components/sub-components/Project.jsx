import React from "react";
import { motion } from "framer-motion";

export default function Project({ link, img, name, description }) {
  const projVariants = {
    offscreen: {
      // y: 300,
      // rotate: -20,
      opacity: 0,
    },
    onscreen: {
      // y: 0,
      // rotate: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        // bounce: 0.3,
        duration: 0.6,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h3 className="text-center xl:text-3xl text-2xl mb-1">{name}</h3>
        <motion.div variants={projVariants}>
          <div className="w-full max-h-96 overflow-hidden">
            <a
              href={link}
              target="_blank"
              rel="noopener"
              role="button"
              tabIndex="0"
            >
              <img
                src={img}
                alt={name}
                loading="lazy"
                title="Click to visit"
                className="object-cover object-top transition-transform duration-500 ease-in-out hover:scale-110 w-full"
              />
            </a>
          </div>
          <div className="mb-6 xl:text-2xl md:text-xl sm:text-lg">
            {description}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
