import type { Certification } from "@/types/portfolio";

export const certifications: readonly Certification[] = [
  {
    id: "csc-professional",
    title: "Civil Service Professional Eligibility",
    issuer: "Civil Service Commission – Philippines",
    issued: "2024-08-01",
    file: "/images/certs/csc-professional-eligibility.png",
  },
  {
    id: "google-advanced-analytics",
    title: "Google Advanced Data Analytics Certificate",
    issuer: "Google Career Certificates (Coursera)",
    issued: "2024-08-01",
    file: "/images/certs/google-advanced-data-analytics.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/FCNW5ITLTRD3",
    credentialId: "FCNW5ITLTRD3",
  },
  {
    id: "datacamp-data-scientist",
    title: "Data Scientist Associate",
    issuer: "DataCamp",
    issued: "2024-09-01",
    file: "/images/certs/datacamp-data-scientist-associate.pdf",
    credentialUrl: "https://www.datacamp.com/certificate/DSA0019865803657",
    credentialId: "DSA0019865803657",
  },
  {
    id: "google-it-automation",
    title: "Google IT Automation with Python",
    issuer: "Google Career Certificates (Coursera)",
    issued: "2023-04-01",
    file: "/images/certs/google-it-automation-with-python.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/TWZIWG0C3V96",
    credentialId: "TWZIWG0C3V96",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google Career Certificates (Coursera)",
    issued: "2022-11-01",
    file: "/images/certs/google-data-analytics.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/KYQCGXVYJJTJ",
    credentialId: "KYQCGXVYJJTJ",
  },
  {
    id: "sparta-computing",
    title: "Computing Microspecialization Pathway",
    issuer: "Project SPARTA PH",
    issued: "2023-09-01",
    file: "/images/certs/sparta-computing-microspecialization-pathway.pdf",
    credentialId: "NZ49212",
  },
] as const satisfies readonly Certification[];
