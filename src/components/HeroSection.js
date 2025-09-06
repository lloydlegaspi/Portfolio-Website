import React from "react";
import ParticlesContainer from "@/components/ParticlesContainer";
import Photo from "@/components/Photo";
import AnimatedText from "@/components/AnimatedText";
import SocialIcons from "@/components/SocialIcons";

const HeroSection = () => {
  return (
  <section id="home" className="w-full bg-light dark:bg-dark  flex items-center relative py-20">
      <ParticlesContainer />
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
  <div className="flex flex-row w-full items-center sm:flex-col sm:gap-10 md:gap-6 md:flex-col lg:gap-10 lg:flex-col">

          {/* Profile Image */}
          <div className="relative w-full lg:w-[40%] max-w-[560px] rounded-2xl bg-light dark:bg-dark">
            <Photo />
          </div>

          {/* Text Section */}
          <div className="flex-1 max-w-3xl w-full text-left flex flex-col sm:text-center sm:items-center md:text-center md:items-center lg:text-center lg:items-center">
            <AnimatedText
              text="John Lloyd Legaspi"
              className="!text-3xl md:!text-4xl lg:!text-5xl sm:pt-2"
            />

            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 md:text-base lg:text-lg">
              Data Science | Machine Learning | Software Development
            </p>

            <p className="my-4 text-sm font-medium md:text-base lg:text-base">
              Hey there! I&apos;m Lloyd, a <strong>computer science student</strong> who loves
              learning and solving problems.
            </p>

            <div className="flex gap-4 mt-4 items-center sm:justify-center md:justify-center lg:justify-center">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// contact icon moved into SocialIcons
