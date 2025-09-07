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
  <div className="max-w-6xl mx-auto px-4 pt-0 pb-36">
      <div className="mb-6 flex flex-col items-center text-center">
        <h3 className="text-3xl lg:text-4xl font-bold">Education builds foundations.</h3>
      </div>

      <div>
  <div role="tablist" aria-label="Experience Education Tabs" className="w-full max-w-xs mx-auto flex gap-1 mb-6 justify-center border border-gray-200 dark:border-neutral-700 rounded-full overflow-hidden bg-transparent">
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`flex-1 min-w-0 text-center px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-primaryDark/20 ${
                active === t.id
                  ? "bg-dark text-light dark:bg-light dark:text-dark"
                  : "bg-transparent text-dark/70 dark:text-light/70 hover:bg-gray-50 dark:hover:bg-neutral-800"
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
