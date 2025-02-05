import Image from "next/image";
import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import profilePic from "../../public/images/profile/prof-pic-3.png";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import Technologies from "@/components/Technologies";

const About = () => {
  return (
    <>
      <Head>
        <title>Lloyd Legaspi | About Page</title>
        <meta name="description" content="About John Lloyd Legaspi" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col lg:flex-row items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* Flex container with conditional column or row layout */}
          <div className="flex flex-row xl:flex-row w-full gap-12 xl:gap-16 items-center">
            
            {/* Image Section (Hidden on small screens, shown on large screens) */}
            <div className="relative w-full xl:w-[40%] max-w-[400px] xl:max-w-none rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light order-last lg:order-first md:hidden sm:hidden lg:hidden">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light overflow-hidden" />
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={profilePic}
                  alt="Lloyd"
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Left Section: About Me and Tools & Technologies */}
            <div className="flex-1 max-w-3xl w-full text-left">
              <h3 className="mb-6 text-3xl lg:text-4xl font-bold ">
              Hi! I'm John Lloyd Legaspi, just call me{" "}
              <strong>Lloyd</strong>.
              </h3>
              <p className="mb-4 text-sm md:text-base font-medium">
                I’m a <strong>Computer Science student</strong> at the{" "}
                <strong>Polytechnic University of the Philippines</strong> and a{" "}
                <strong>DOST Scholar</strong>. I approach challenges with a{" "}
                <strong>logical</strong> and <strong>strategic</strong>{" "}
                mindset, always thinking several steps ahead. Planning early is
                my thing — I can’t stand the pressure of last-minute cramming.
              </p>
              <p className="text-sm md:text-base font-medium">
                Although I’m naturally introverted, I often find myself in{" "}
                <strong>leadership roles</strong>, whether in organizations or{" "}
                group projects. When I'm not busy with studies or projects,
                you’ll probably catch me walking peacefully around my
                neighborhood.
              </p>

              {/* Technologies Section */}
              <Technologies />
            </div>
          </div>

          {/* Additional Sections */}
          <Experience />
          <Education />

        </Layout>
      </main>
    </>
  );
};

export default About;

