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
        className="relative max-w-[500px] md:max-w-[600px] lg:max-w-[700px] aspect-square rounded-full overflow-hidden"
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
        className="absolute top-0 left-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 600 600" // Match the image dimensions
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="295" // Center of the circle
          cy="305" // Center of the circle
          r="295"  // Radius should fit the image
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


