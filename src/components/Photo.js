"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../public/images/profile/prof-pic-1.png";

const Photo = () => {
  return (
  <div className="flex justify-center items-center w-full h-full relative">
      {/* Animated Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
  className="w-96 lg:w-80 md:w-64 sm:w-48 xs:w-40 aspect-square rounded-full overflow-hidden relative"
      >
        <Image
          src={profilePic}
          alt="John Lloyd Legaspi"
          priority
          quality={100}
          width={400}
          height={400}
          className="object-cover rounded-full"
        />
      </motion.div>

      {/* Animated SVG Circle */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        fill="transparent"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      >
        <motion.circle
          cx="295"
          cy="305"
          r="270"
          className="stroke-black dark:stroke-white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;


