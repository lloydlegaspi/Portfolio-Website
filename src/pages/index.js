import Head from "next/head";
import Photo from "../components/Photo";
import AnimatedText from "../components/AnimatedText.js";
import TransitionEffect from "@/components/TransitionEffect";
import SocialIcons from "@/components/SocialIcons";
import ParticlesContainer from "../components/ParticlesContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lloyd Legaspi</title>
        <meta name="description" content="Lloyd Legaspi - Portfolio" />
      </Head>
      <TransitionEffect />
      <main className="relative flex items-center text-dark w-full dark:text-light py-24">
        <ParticlesContainer />
          <div className="relative z-10 p-4 mx-14 md:mx-14 lg:mx-26 flex-grow">
          <div className="flex items-center justify-center w-full lg:flex-col">
            {/* Profile Image */}
            <div className="w-1/2 md:w-full flex justify-center lg:mb-4 sm:w-1/2">
              <Photo />
            </div>

            {/* Text Section */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="John Lloyd Legaspi"
                className="!text-6xl !text-center xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl sm:pt-2"
              />

              <p className="text-lg font-medium text-gray-600 dark:text-gray-400 md:text-base sm:text-sm">
                Data Science | Machine Learning | Software Development
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Hey there! I'm Lloyd, a <strong>computer science student</strong> who loves learning and solving problems. I thrive as a <strong>quick learner</strong> and a <strong>team player</strong>, always eager to take on challenges that help me grow.
              </p>
              <div className="flex justify-center gap-6 mt-4 lg:mt-6">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
