import React, { useState } from "react";
import Education from "./Education";
import Certificates from "./Certificates";

const tabs = [
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
];

const ExperienceEducationTabs = () => {
  const [active, setActive] = useState("education");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col items-center text-center">
        <h3 className="text-3xl lg:text-4xl font-bold">Education builds foundations.</h3>
      </div>

      <div>
  <div role="tablist" aria-label="Experience Education Tabs" className="flex gap-3 mb-6 justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`px-4 py-2 rounded-lg font-medium border-2 border-solid transition-colors focus:outline-none focus:ring-2 focus:ring-primaryDark/30 ${
                active === t.id
                  ? "bg-dark text-light border-dark dark:bg-light dark:text-dark dark:border-light"
                  : "bg-transparent text-dark/80 dark:text-light/80 border-transparent hover:bg-dark/5 dark:hover:bg-light/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div>
          <div
            role="tabpanel"
            aria-hidden={active !== "education"}
            className={`${active === "education" ? "block" : "hidden"}`}
          >
            <Education />
          </div>

          <div
            role="tabpanel"
            aria-hidden={active !== "certificates"}
            className={`${active === "certificates" ? "block" : "hidden"}`}
          >
            <Certificates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducationTabs;
