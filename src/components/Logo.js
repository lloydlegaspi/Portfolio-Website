import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = ({ compact = false }) => {
  const sizeClasses = compact ? "w-6 h-6" : "w-10 h-10";

  return (
    <div className={`flex items-center justify-center mt-2`}>
      <MotionLink href="/" className={`${sizeClasses} relative flex items-center justify-center`}>
        {/* Light bg logo (shown in light mode) */}
        <Image src="/images/logo/logo-jl-white-bg.png" alt="JL logo" fill sizes="(max-width: 640px) 24px, 48px" className="block dark:hidden object-contain" />
        {/* White bg logo (shown in dark mode) */}
        <Image src="/images/logo/logo-jl-black-bg.png" alt="JL logo white" fill sizes="(max-width: 640px) 24px, 48px" className="hidden dark:block object-contain" />
      </MotionLink>
    </div>
  );
};

export default Logo;
