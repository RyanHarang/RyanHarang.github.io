import React from "react";
import { motion } from "framer-motion";

export default function Job({ title, company, desc }) {
  const jobVariants = {
    offscreen: {
      y: 200,
      rotate: 15,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.0,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={jobVariants}
    >
      <div className="flex flex-col mt-5">
        <h3 className="xl:text-3xl text-2xl my-2">
          {title} at {company}
        </h3>
        <p className="xl:text-2xl text-xl">{desc}</p>
      </div>
    </motion.div>
  );
}
