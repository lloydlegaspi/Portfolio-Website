import React, { useState } from "react";
import Image from "next/image";

// Minimal certificate card + modal viewer.
// Uses files placed under /public/images/certs (and subfolders).
const CERTIFICATES = [
  {
    id: "csc-professional",
    title: "Civil Service Professional Eligibility",
    org: "Civil Service Commission – Philippines",
    date: "Aug 2024",
    file: "/images/certs/csc-professional-eligibility.png",
  },

  // Google Career Certificates
  {
    id: "google-advanced-analytics",
    title: "Google Advanced Data Analytics Certificate",
    org: "Google Career Certificates (Coursera)",
    date: "Aug 2024",
    file: "/images/certs/google-advanced-data-analytics.pdf",
    url: "https://www.coursera.org/account/accomplishments/specialization/FCNW5ITLTRD3",
    note: "FCNW5ITLTRD3",
  },
  {
    id: "google-it-automation",
    title: "Google IT Automation with Python",
    org: "Google Career Certificates (Coursera)",
    date: "Apr 2023",
    file: "/images/certs/google-it-automation-with-python.pdf",
    url: "https://www.coursera.org/account/accomplishments/specialization/TWZIWG0C3V96",
    note: "TWZIWG0C3V96",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    org: "Google Career Certificates (Coursera)",
    date: "Nov 2022",
    file: "/images/certs/google-data-analytics.pdf",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/KYQCGXVYJJTJ",
    note: "KYQCGXVYJJTJ",
  },

  // DataCamp
  {
    id: "datacamp-ds",
    title: "Data Scientist Associate",
    org: "DataCamp",
    date: "Sept 2024",
    file: "/images/certs/datacamp-data-scientist-associate.pdf",
    url: "https://www.datacamp.com/certificate/DSA0019865803657",
    note: "DSA0019865803657",
  },
  {
    id: "datacamp-pda",
    title: "Python Data Associate",
    org: "DataCamp",
    date: "Feb 2024",
    file: "/images/certs/datacamp-python-data-associate.pdf",
    note: "PDA0010244439155",
  },
  {
    id: "datacamp-daa",
    title: "Data Analyst Associate",
    org: "DataCamp",
    date: "Feb 2024",
    file: "/images/certs/datacamp-data-analyst-associate.pdf",
    url: "https://www.datacamp.com/certificate/DAA0013777622726",
    note: "DAA0013777622726",
  },

  // Project SPARTA (combine files in project-sparta folder)
  {
    id: "sparta-computing",
    title: "Computing Microspecialization Pathway",
    org: "Project SPARTA PH",
    date: "Sept 2023",
    file: "/images/certs/sparta-computing-microspecialization-pathway.pdf",
    url: "https://drive.google.com/file/d/1Rs_ewfQxEnIF92rDWO0DihRgRgzoH5EY/view",
    note: "NZ49212",
  },
  {
    id: "sparta-data-governance",
    title: "Data Governance Microspecialization Pathway",
    org: "Project SPARTA PH",
    date: "Sept 2023",
    file: "/images/certs/sparta-data-governance-microspecialization-pathway.pdf",
    url: "https://drive.google.com/file/d/1xH9MGjYBjUQSZ1TUGL-GfM1F69OamvqA/view",
    note: "IX68348",
  },

  // Zuitt / workshops combined (examples from workshops folder)
  {
    id: "zuitt-basic-web",
    title: "Basic Web Development Workshop",
    org: "Zuitt - Coding Bootcamp",
    date: "Feb 2023",
    file: "/images/certs/workshops/zuitt-coding-bootcamp.pdf",
    url: "https://drive.google.com/file/d/1w06GksX5TYOdcKnjFvbiQTkDhNP9iNNx/view",
    note: "02507",
  },
  // Collection: Project SPARTA (show all files in modal carousel)
  {
    id: "sparta-collection",
    title: "Project SPARTA PH — Data Engineering Pathway (collection)",
    org: "Project SPARTA PH",
    date: "July 2023 - Sept 2023",
    files: [
      "/images/certs/project-sparta/Computing in Python.pdf",
      "/images/certs/project-sparta/ComputingMicrospecialization Pathway.pdf",
      "/images/certs/project-sparta/Dashboards and Drill-Down Analytics.pdf",
      "/images/certs/project-sparta/Data GovernanceMicrospecialization Pathway.pdf",
      "/images/certs/project-sparta/Data Management Fundamentals.pdf",
      "/images/certs/project-sparta/Data Visualization Fundamentals.pdf",
      "/images/certs/project-sparta/Enterprise Data Governance.pdf",
      "/images/certs/project-sparta/Essential Excel Skills for Data Preparation and Analysis.pdf",
      "/images/certs/project-sparta/Getting Grounded on Analytics (1).pdf",
      "/images/certs/project-sparta/SQL for Business Users.pdf",
    ],
  },

  // Collection: Workshops, Trainings, and Webinars
  {
    id: "workshops-collection",
    title: "Workshops, Trainings & Webinars (collection)",
    org: "Various",
    date: "2022 - Present",
    files: [
      "/images/certs/workshops/CareerTalk.jpg",
      "/images/certs/workshops/Coding Bootcamp - Certificate.pdf",
      "/images/certs/workshops/Data Analytics Foundations .pdf",
      "/images/certs/workshops/DICT NETWORKING FUNDAMENTALS.PNG",
      "/images/certs/workshops/InfoQuest.pdf",
      "/images/certs/workshops/John Lloyd Legaspi SIS 3 E-Certificate.pdf",
      "/images/certs/workshops/JOHN LLOYD S. LEGASPI.pdf",
      "/images/certs/workshops/John Lloyd S. Legaspi.png",
      "/images/certs/workshops/Microsoft101_ JohnLloydLegaspi.pdf",
      "/images/certs/workshops/MS Excel Advanced Formula _ DataSense Analytics.pdf",
      "/images/certs/workshops/Seas The Future CCIS.png",
      "/images/certs/workshops/SIDHI SkillsQuest - Data Visualization Certificate for John Lloyd S. Legaspi.pdf",
      "/images/certs/workshops/unionbank-data-science-development-program.pdf",
      "/images/certs/workshops/zuitt-coding-bootcamp.pdf",
      "/images/certs/workshops/\u201cBASIC MICROSOFT OFFICE APPLICATION\u201d- Digital Literacy Training .pdf",
    ],
  },
];

const isPdf = (path) => path && path.toLowerCase().endsWith(".pdf");

const Certificates = () => {
  const [viewer, setViewer] = useState({ open: false, file: null, title: "" });
  const [collectionViewer, setCollectionViewer] = useState({ open: false, files: [], index: 0, title: "" });

  const openViewer = (c) => setViewer({ open: true, file: c.file, title: `${c.title} — ${c.org}` });
  const closeViewer = () => setViewer({ open: false, file: null, title: "" });

  const openCollectionViewer = (c) =>
    setCollectionViewer({ open: true, files: c.files || [], index: 0, title: `${c.title} — ${c.org}` });
  const closeCollectionViewer = () => setCollectionViewer({ open: false, files: [], index: 0, title: "" });

  // keyboard navigation for collection viewer
  React.useEffect(() => {
    if (!collectionViewer.open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCollectionViewer();
      if (e.key === "ArrowRight")
        setCollectionViewer((s) => ({ ...s, index: Math.min(s.index + 1, s.files.length - 1) }));
      if (e.key === "ArrowLeft")
        setCollectionViewer((s) => ({ ...s, index: Math.max(s.index - 1, 0) }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [collectionViewer.open]);

  return (
    <div>
      <div className="grid grid-cols-12 gap-6">
        {CERTIFICATES.map((c) => (
          <div key={c.id} className="col-span-4 sm:col-span-12">
            <article className="w-full flex flex-col items-start justify-start rounded-2xl border border-solid border-gray-200 bg-white p-4 relative dark:bg-gray-900 dark:border-gray-700">
              <span className="text-xs text-gray-500 dark:text-gray-400">{c.date}</span>

              {Array.isArray(c.files) && c.files.length > 0 ? (
                <button onClick={() => openCollectionViewer(c)} className="w-full mt-2 rounded-lg overflow-hidden h-[180px] relative">
                  {/* Show first file as preview */}
                  {isPdf(c.files[0]) ? (
                    <object data={encodeURI(c.files[0]) + "#preview"} type="application/pdf" className="w-full h-full block pointer-events-none">
                      <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-600">PDF Preview — click to open</div>
                    </object>
                  ) : (
                    <Image src={encodeURI(c.files[0])} alt={c.title} fill className="object-cover rounded-md pointer-events-none" />
                  )}
                </button>
              ) : (
                <button onClick={() => openViewer(c)} className="w-full mt-2 rounded-lg overflow-hidden h-[180px] relative">
                  {/* For PDF files, attempt inline preview using <object>; many browsers render first page. Fallback shows a label. */}
                  {isPdf(c.file) ? (
                    (() => {
                      const url = encodeURI(c.file) + "#preview";
                      return (
                        <object data={url} type="application/pdf" className="w-full h-full block pointer-events-none" aria-label={`${c.title} PDF preview`}>
                          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-600">PDF Preview — click to open</div>
                        </object>
                      );
                    })()
                  ) : (
                    <Image src={encodeURI(c.file)} alt={c.title} fill className="object-cover rounded-md pointer-events-none" />
                  )}
                </button>
              )}

              <h4 className="mt-3 text-lg font-semibold">{c.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">{c.org}</p>

              <div className="mt-2 flex items-center gap-2">
                {c.url && (
                  <a href={c.url} target="_blank" rel="noreferrer" className="text-xs text-blue-600 underline">View credential</a>
                )}
                {c.note && <span className="text-xs text-gray-500">{c.note}</span>}
              </div>
            </article>
          </div>
        ))}
      </div>

      {viewer.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
              <h3 className="text-sm font-semibold">{viewer.title}</h3>
              <button onClick={closeViewer} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">x</button>
            </div>

            <div className="w-full h-[80vh] bg-white dark:bg-gray-900">
              {isPdf(viewer.file) ? (
                <iframe src={encodeURI(viewer.file)} className="w-full h-full" title={viewer.title} />
              ) : (
                // next/image can't easily fill inside dynamic modal when using src from public and without layout; use img as fallback
                // but we already used next/image for thumbnails; here use native img for simplicity
                <img src={encodeURI(viewer.file)} alt={viewer.title} className="w-full h-full object-contain bg-gray-100" />
              )}
            </div>
          </div>
        </div>
      )}

      {collectionViewer.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
              <h3 className="text-sm font-semibold">{collectionViewer.title} ({collectionViewer.index + 1}/{collectionViewer.files.length})</h3>
              <div className="flex items-center gap-2">
                <button onClick={closeCollectionViewer} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">x</button>
              </div>
            </div>

            <div className="w-full h-[82vh] bg-white dark:bg-gray-900 flex items-center justify-center relative">
              <button
                aria-label="Previous"
                onClick={() => setCollectionViewer((s) => ({ ...s, index: Math.max(s.index - 1, 0) }))}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
              >
                ‹
              </button>

              <div className="w-full h-full flex items-center justify-center">
                {isPdf(collectionViewer.files[collectionViewer.index]) ? (
                  <iframe src={encodeURI(collectionViewer.files[collectionViewer.index])} className="w-full h-full" title={`file-${collectionViewer.index}`} />
                ) : (
                  <img src={encodeURI(collectionViewer.files[collectionViewer.index])} className="w-full h-full object-contain" alt={`file-${collectionViewer.index}`} />
                )}
              </div>

              <button
                aria-label="Next"
                onClick={() => setCollectionViewer((s) => ({ ...s, index: Math.min(s.index + 1, s.files.length - 1) }))}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 text-white p-2 hover:bg-black/60"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
