import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import AboutCarousel from "@/components/AboutCarousel";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import ExperienceEducationTabs from "@/components/ExperienceEducationTabs";
import Technologies from "@/components/Technologies";
import ProjectsCarousel from "@/components/ProjectsCarousel";

const ABOUT_IMAGES = [
  "/images/aboutme/about-pic-1.png",
  "/images/aboutme/about-pic-2.jpg",
  "/images/aboutme/about-pic-3.jpg",
  "/images/aboutme/about-pic-4.jpg",
];

function AboutSection() {
  return (
    <section id="about" className="w-full bg-light dark:bg-dark pt-28 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-row xl:flex-row w-full gap-16 xl:gap-20 items-center">
          <div className="relative w-full xl:w-[40%] max-w-[400px] xl:max-w-none rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light order-last lg:order-first md:hidden sm:hidden lg:hidden">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light overflow-hidden" />
            <AboutCarousel images={ABOUT_IMAGES} />
          </div>

          <div className="flex-1 max-w-3xl w-full text-left space-y-6">
            <h3 id="about-me" className="mb-8 text-3xl lg:text-4xl font-bold">
              Building Foundations, Shaping Skills.
            </h3>

            <p className="mb-6 text-sm md:text-base font-medium leading-relaxed md:leading-loose">
              I&apos;m a <strong>Computer Science student</strong> at the <strong>Polytechnic
              University of the Philippines</strong> and a <strong>DOST Scholar</strong>. I enjoy
              solving problems with a <strong>logical</strong> and <strong>strategic</strong> mindset, always thinking several steps ahead. Planning early is my thing as I
              can&apos;t stand the pressure of last-minute cramming.
            </p>

            <p className="mb-6 text-sm md:text-base font-medium leading-relaxed md:leading-loose">
              Though I&apos;m naturally introverted, <strong> I continually strive to become the
              best leader</strong> I can be, learning from every project and
              collaboration. Beyond academics and coding, I value simple moments of peace like
              walking and running to reset and recharge.
            </p>

            <Technologies />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceEducationSection() {
  return (
    <>
      <section id="experience" className="w-full bg-light dark:bg-dark pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <Experience />
        </div>
      </section>

      <section id="education-certificates" className="w-full bg-light dark:bg-dark pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <ExperienceEducationTabs />
        </div>
      </section>

      <section id="projects" className="w-full bg-light dark:bg-dark pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <ProjectsCarousel />
        </div>
      </section>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>John Lloyd Legaspi</title>
        <meta name="description" content="John Lloyd Legaspi - Portfolio" />
      </Head>

  <main className="relative flex flex-col items-center text-dark w-full dark:text-light pt-24">
        <HeroSection />
        <AboutSection />
        <ExperienceEducationSection />
      </main>
    </>
  );
}
