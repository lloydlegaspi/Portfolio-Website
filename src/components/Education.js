import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ degree, school, schoolLink, time, address, highlights }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.9, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {degree}&nbsp;
          <a
            href={schoolLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryDark capitalize"
          >
            | {school}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <ul className="list-disc list-inside">
          {Array.isArray(highlights) &&
            highlights.map((item, index) => (
              <li key={index}>
                {item.includes("DOST Junior Level Science Scholarship") ? (
                  <>
                    DOST Junior Level Science Scholarship&nbsp;
                    <a
                      href="https://sei.dost.gov.ph/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      (JLSS)
                    </a>
                    Awardee
                  </>
                ) : item.includes("Google Developer Student Clubs") ? (
                  <>
                    Data Co-Lead,{" "}
                    <a
                      href="https://gdsc.community.dev/polytechnic-university-of-the-philippines/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      Google Developer Student Clubs - PUP Main
                    </a>{" "}
                    (2023-2024)
                  </>
                ) : item.includes("PUP The Programmers' Guild") ? (
                  <>
                    Member,{" "}
                    <a
                      href="https://www.facebook.com/PUPTheProgrammersGuild"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      {"PUP The Programmers' Guild"}
                    </a>{" "}
                    (2023-Present)
                  </>
                ) : item.includes("PUP ASCII") ? (
                  <>
                    Research and Extensions Committee Member,{" "}
                    <a
                      href="https://www.facebook.com/PUPASCII"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      PUP ASCII
                    </a>{" "}
                    (2022-2023)
                  </>
                ) : item.includes("Talisik") ? (
                  <>
                    Editor-in-Chief,{" "}
                    <a
                      href="https://www.facebook.com/talisiknnhs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      Talisik
                    </a>{" "}
                    (2021-2022)
                  </>
                ) : item.includes("NNHS Supreme Student Government") ? (
                  <>
                    Protocol Officer,{" "}
                    <a
                      href="https://www.facebook.com/nnhsssg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primaryDark font-semibold"
                    >
                      NNHS Supreme Student Government
                    </a>{" "}
                    (2021-2022)
                  </>
                ) : (
                  item
                )}
              </li>
            ))}
        </ul>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const polytechnicHighlights = [
    "DOST Junior Level Science Scholarship (JLSS) Awardee",
    "Data Co-Lead, Google Developer Student Clubs - PUP Main (2023-2024)",
    "Member, PUP The Programmers' Guild (2023-Present)",
    "Research and Extensions Committee Member, PUP ASCII (2022-2023)",
  ];
  const norzagarayHighlights = ["Editor-in-Chief, Talisik (2021-2022)", "Protocol Officer, NNHS Supreme Student Government (2021-2022)"];

  return (
    <div className="my-8">
      <div className="p-4 bg-light dark:bg-dark rounded-xl shadow-lg">
        <h2 className="font-bold text-4xl mb-8 w-full text-center">Education</h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mb-7">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-8 xs:ml-2">
            <Details
              degree="Bachelor of Science in Computer Science (BSCS)"
              school="Polytechnic University of the Philippines"
              schoolLink="https://www.pup.edu.ph/"
              time="2022 - Present"
              address="Sta. Mesa, Manila"
              highlights={polytechnicHighlights}
            />
            <Details
              degree="Science, Technology, Engineering, and Mathematics"
              school="Norzagaray National High School"
              schoolLink="https://norzagaraynhs.deped.gov.ph/"
              time="2016 - 2022"
              address="Norzagaray, Bulacan"
              highlights={norzagarayHighlights}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;


