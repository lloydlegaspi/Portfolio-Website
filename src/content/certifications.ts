import type { Certification } from "@/types/portfolio";

export const certifications: readonly Certification[] = [
  {
    id: "microsoft-azure-fundamentals",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    detail: "AZ-900",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JohnLloydLegaspi-0410/787E21E959DA3AF3?sharingId=AA931207731F096F",
  },
  {
    id: "microsoft-azure-ai-fundamentals",
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    detail: "AI-900",
    credentialUrl:
      "https://learn.microsoft.com/api/credentials/share/en-us/JohnLloydLegaspi-0410/125C0A1BAC22778A?sharingId=AA931207731F096F",
  },
  {
    id: "google-advanced-analytics",
    title: "Google Advanced Data Analytics",
    issuer: "Google",
    detail: "Google Career Certificates / Coursera",
    issued: "2024-08-01",
    file: "/images/certs/google-advanced-data-analytics.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/FCNW5ITLTRD3",
    credentialId: "FCNW5ITLTRD3",
  },
  {
    id: "google-it-automation",
    title: "Google IT Automation with Python",
    issuer: "Google",
    detail: "Google Career Certificates / Coursera",
    issued: "2023-04-01",
    file: "/images/certs/google-it-automation-with-python.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/TWZIWG0C3V96",
    credentialId: "TWZIWG0C3V96",
  },
  {
    id: "google-data-analytics",
    title: "Google Data Analytics Professional",
    issuer: "Google",
    detail: "Google Career Certificates / Coursera",
    issued: "2022-11-01",
    file: "/images/certs/google-data-analytics.pdf",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/KYQCGXVYJJTJ",
    credentialId: "KYQCGXVYJJTJ",
  },
  {
    id: "datacamp-data-engineer",
    title: "Data Engineer Associate",
    issuer: "DataCamp",
    credentialUrl: "https://www.datacamp.com/certificate/DEA0018906493000",
    credentialId: "DEA0018906493000",
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
    id: "datacamp-python-data",
    title: "Python Data Associate",
    issuer: "DataCamp",
    file: "/images/certs/datacamp-python-data-associate.pdf",
  },
  {
    id: "datacamp-data-analyst",
    title: "Data Analyst Associate",
    issuer: "DataCamp",
    file: "/images/certs/datacamp-data-analyst-associate.pdf",
  },
  {
    id: "csc-professional",
    title: "Civil Service Professional Eligibility",
    issuer: "Civil Service Commission – Philippines",
    issued: "2024-08-01",
    file: "/images/certs/csc-professional-eligibility.png",
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
