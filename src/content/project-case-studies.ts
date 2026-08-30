import type { ProjectCaseStudy } from "@/types/case-study";

const movieImages = {
  home: {
    src: "/images/projects/Movie/01_home_page.png",
    width: 1746,
    height: 962,
    alt: "Production Partner Screening report home page with navigation for starting the screening workflow or reading the report guide.",
    title: "Home",
    caption: "Introduces the screen, prioritize, and investigate workflow.",
  },
  about: {
    src: "/images/projects/Movie/02_about_page.png",
    width: 1795,
    height: 985,
    alt: "About the Report page listing the business questions, analytical scope, key business rules, and interpretation limitations.",
    title: "About the Report",
    caption:
      "Documents analytical scope, screening rules, usage guidance, and evidence limitations.",
  },
  overview: {
    src: "/images/projects/Movie/03_overview.png",
    width: 1794,
    height: 1004,
    alt: "Production Partner Screening overview with candidate counts, evidence coverage metrics, a production scatter plot, and a company comparison table.",
    title: "Production Partner Screening",
    caption:
      "Screens and compares candidate production companies using production, recency, rating, finance, and collaboration evidence.",
  },
  company: {
    src: "/images/projects/Movie/04_company.png",
    width: 1795,
    height: 1000,
    alt: "Company Screening Evidence page for Blumhouse Productions with release-year history, movie-level rating and financial evidence, individual movies, and recurring collaborators.",
    title: "Company Screening Evidence",
    caption:
      "Provides production history, movie-level evidence, evidence coverage, and recurring collaborator context for the selected company.",
  },
  pipeline: {
    src: "/images/projects/Movie/partner_screening-movie_pipeline_final.drawio.png",
    width: 1845,
    height: 1077,
    alt: "End-to-end movie analytics pipeline from supplied movie files and a Kaggle TMDB snapshot through reconciliation, PySpark, Parquet, PostgreSQL, dbt, verification, and Power BI.",
    caption:
      "End-to-end pipeline showing controlled evidence preparation, validation gates, PySpark processing, PostgreSQL loading, dbt transformation, and Power BI delivery.",
  },
  schema: {
    src: "/images/projects/Movie/partner_screening-movie_schema.drawio (1).png",
    width: 3425,
    height: 1492,
    alt: "Production Partner Screening fact constellation with four dimensions, a movie-genre bridge, and facts for screening, genre context, movie evidence, and collaboration history.",
    caption:
      "Fact constellation serving model with four dimensions, one bridge, and five business-facing fact tables.",
  },
} as const;

const olistImages = {
  pipeline: {
    src: "/images/projects/Olist/olist_pipeline_process_flow.png",
    width: 1810,
    height: 1019,
    alt: "Olist pipeline process flow showing source validation, PostgreSQL preparation, nine mapped loads, dbt transformation, quality gates, mart verification, and analytics access.",
    caption:
      "Olist process flow showing validation, mapped ingestion, dbt transformation, and independent quality-verification gates.",
  },
  schema: {
    src: "/images/projects/Olist/olist_pipeline_schema.png",
    width: 4102,
    height: 2219,
    alt: "Olist order, sales, and payment fact constellation with five dimensions and three native-grain fact tables.",
    caption:
      "Olist analytical model showing five shared dimensions and three native-grain facts for orders, sales, and payments.",
  },
  reportingContext: {
    src: "/images/projects/Olist/page0-context.png",
    width: 1137,
    height: 846,
    alt: "Regional Marketplace Balance Monitor context page explaining the business purpose, stakeholder, screening decision, scope, and report usage.",
    title: "Reporting Context",
    caption:
      "Frames regional seller-recruitment investigation as a screening and prioritization exercise.",
  },
  home: {
    src: "/images/projects/Olist/page1-overview.png",
    width: 1537,
    height: 866,
    alt: "Regional Opportunity Overview dashboard with demand and seller activity KPIs, a state comparison scatter plot, a Brazil map, and a table of states flagged for investigation.",
    title: "Home",
    caption:
      "Introduces the Regional Marketplace Balance Monitor and provides navigation into the report workflow.",
  },
  stateOpportunityDeepDive: {
    src: "/images/projects/Olist/page2-state-drillthrough.png",
    width: 1534,
    height: 865,
    alt: "State Opportunity Deep Dive for Pará with demand, local seller, interstate dependence, category, seller-origin, and monthly fulfillment evidence.",
    title: "State Opportunity Deep Dive",
    caption:
      "Examines customer demand, local seller participation, out-of-state seller origins, and fulfillment evidence for the selected state.",
  },
  decisionSummary: {
    src: "/images/projects/Olist/page3-summary.png",
    width: 1533,
    height: 862,
    alt: "Decision Summary for Pará with investigation evidence, a leading category, a cautious recommendation, and validation next steps.",
    title: "Decision Summary",
    caption:
      "Summarizes the evidence, recommended investigation focus, and next validation steps for the selected state.",
  },
} as const;

const movieCaseStudy: ProjectCaseStudy = {
  projectSlug: "movie-analytics-pipeline",
  disciplines: ["Data Engineering", "Analytics", "Power BI"],
  intro:
    "An end-to-end data engineering and analytics system for screening film production companies that may warrant deeper partnership investigation. It turns reconciled movie evidence into tested dimensional marts and a Power BI report built for evidence-led comparison—not automatic partner selection.",
  metadata: {
    title: "Movie Analytics Data Engineering Case Study",
    description:
      "A technical case study of a PySpark, PostgreSQL, dbt, Airflow, and Power BI pipeline for production-partner screening.",
  },
  hero: movieImages.overview,
  sections: [
    {
      id: "context",
      title: "Project context",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The intended user is a Strategic Partnerships Manager at a film production studio. The system helps that user narrow a large company universe, compare production evidence, and decide where deeper commercial, operational, legal, and strategic due diligence may be worthwhile.",
            "Stratflix is a fictional mock company created for a capstone project. It is not presented as a real Stratpoint business initiative.",
          ],
        },
      ],
    },
    {
      id: "business-problem",
      title: "Business problem",
      blocks: [
        {
          type: "callout",
          title: "Guiding question",
          text: "Which production companies warrant deeper partnership investigation?",
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The report supports screening, comparison, evidence inspection, and collaboration-history review. It does not label one company as universally “best,” make a final partner choice, or replace legal and commercial due diligence.",
          ],
        },
      ],
    },
    {
      id: "data-sources",
      title: "Data sources",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The evidence base combines instructor-supplied capstone movie files with the TMDB Movies Daily Updates snapshot from Kaggle. External TMDB evidence is bounded, prepared, reconciled, and approved before scheduled processing; the production orchestration does not depend on live TMDB calls.",
            "Identity and source reconciliation happens before analytics so company, movie, production-credit, rating, and genre evidence enters the pipeline through a controlled dataset rather than through competing source interpretations.",
          ],
        },
      ],
    },
    {
      id: "pipeline",
      title: "End-to-end pipeline",
      blocks: [
        { type: "figure", figure: movieImages.pipeline },
        {
          type: "paragraphs",
          paragraphs: [
            "Supplied and external movie evidence moves through validation and reconciliation, PySpark batch processing, validated Parquet, transactional PostgreSQL loading, dbt staging and intermediate models, dimensional marts, and finally Power BI.",
            "Apache Airflow orchestrates the repeatable workflow after approved input evidence is prepared. Explicit gates stop downstream tasks when input, Parquet, database-load, dbt-test, or mart-verification checks fail.",
          ],
        },
      ],
    },
    {
      id: "analytical-model",
      title: "Analytical model",
      blocks: [
        { type: "figure", figure: movieImages.schema },
        {
          type: "paragraphs",
          paragraphs: [
            "The serving layer is a multi-fact dimensional model—a fact constellation—rather than a single flattened reporting table. Shared dimensions cover company, movie, date, and genre, with bridge_movie_genre preserving a movie’s exact genre memberships.",
            "The fact layer separates company screening, company-genre context, movie evidence, collaboration pairs, and the movies behind those observed collaborations. That separation keeps each analytical grain explicit and lets the dashboard move from a company shortlist to supporting evidence without conflating levels.",
          ],
        },
      ],
    },
    {
      id: "data-quality",
      title: "Data quality and reconciliation",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "22", label: "dbt models" },
            { value: "141", label: "data tests" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The pipeline treats raw, transformed, and analytical data as separate contracts. Immutable inputs, explicit PySpark schemas, deterministic processing, relationship and count reconciliation, validated Parquet, transactional PostgreSQL publication, dbt tests, and final-mart verification provide checks at more than one layer.",
            "The goal is not simply a successful task run; it is a traceable path from approved evidence to analytical outputs whose grains and counts can be independently checked.",
          ],
        },
      ],
    },
    {
      id: "dashboard",
      title: "Dashboard as evidence navigation",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The report is organized as a guided screening workflow. The home page establishes the sequence, the report guide documents scope and interpretation, the overview supports company comparison, and Company Screening Evidence exposes the records behind a selected company.",
          ],
        },
        {
          type: "gallery",
          figures: [
            movieImages.home,
            movieImages.about,
            movieImages.overview,
            movieImages.company,
          ],
        },
        {
          type: "subsection",
          title: "Production Partner Screening",
          paragraphs: [
            "The overview—used as this page’s hero—shows candidate counts, recent-production evidence, rating and financial evidence coverage, an experience scatter plot, and a sortable company table. These are comparison aids, not an automated ranking of partner suitability.",
          ],
        },
        {
          type: "subsection",
          title: "Company Screening Evidence",
          paragraphs: [
            "The company page combines release-year history, movie records, evidence coverage, and recurring collaborators. Budgets, revenue, ratings, and ROI remain movie-level outcomes; they are not company earnings or proof that a company caused a movie’s performance. Shared credits show observed collaboration history, not necessarily a formal legal partnership.",
          ],
        },
      ],
    },
    {
      id: "scope",
      title: "Analytical scope",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "2006–2025", label: "analytical period" },
            { value: "2019–2025", label: "recent production window" },
            { value: "United States", label: "production context" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "“US production context” describes qualifying movie evidence associated with the United States. It does not establish a production company’s headquarters, domicile, ownership, or current operating location.",
          ],
        },
      ],
    },
    {
      id: "outcome",
      title: "Screening outcome",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "44,940", label: "represented companies" },
            { value: "7,388", label: "screening-eligible candidates" },
            { value: "83.6%", label: "candidate-universe reduction" },
          ],
          note: "This is a screening reduction, not an 83.6% performance improvement.",
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The result makes the evidence review more manageable while preserving a clear distinction between eligibility for investigation and suitability for a partnership.",
          ],
        },
      ],
    },
    {
      id: "stack",
      title: "Technical stack",
      blocks: [
        {
          type: "bullets",
          items: [
            "Python, Pandas, and PySpark",
            "Parquet and PostgreSQL",
            "dbt Core and dbt tests",
            "Apache Airflow",
            "Power BI",
            "Docker Compose",
            "pytest and SQL verification",
          ],
        },
      ],
    },
    {
      id: "lessons",
      title: "Engineering lessons",
      blocks: [
        {
          type: "bullets",
          items: [
            "Reconcile source identity and precedence before building analytics.",
            "Make data grain explicit at every transformation and reporting layer.",
            "Design analytical marts around the business questions they must answer.",
            "Separate evidence depth from final decision-making authority.",
            "Treat tested upstream contracts as prerequisites for trustworthy dashboards.",
            "Use deterministic inputs and orchestration to make reruns reproducible.",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitations",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Historical movie evidence is not a complete partnership decision engine. Missing rating or financial evidence remains unknown and must not be interpreted as poor performance.",
          ],
        },
        {
          type: "bullets",
          items: [
            "Current operational status and organizational capacity are outside scope.",
            "Strategic fit, ownership, and commercial terms require separate investigation.",
            "Distribution capability is not established by the analytical model.",
            "Movie budgets, revenue, ratings, and ROI are not attributable company earnings.",
            "Formal legal partnership history requires due diligence beyond shared production credits.",
          ],
        },
      ],
    },
  ],
};

const olistCaseStudy: ProjectCaseStudy = {
  projectSlug: "olist-ecommerce-pipeline",
  disciplines: ["Data Engineering", "Airflow", "dbt", "PostgreSQL"],
  intro:
    "A reproducible local data pipeline that validates nine immutable Olist CSV files, replaces raw PostgreSQL tables transactionally, builds tested dimensional marts with dbt, and verifies warehouse outputs independently before analytical use.",
  metadata: {
    title: "Olist Ecommerce Data Pipeline Case Study",
    description:
      "A technical case study of a validated Airflow, PostgreSQL, and dbt pipeline for regional marketplace analytics.",
  },
  hero: olistImages.home,
  sections: [
    {
      id: "context",
      title: "Project context",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The project transforms nine immutable Olist source CSVs into tested PostgreSQL dimensional marts through a reproducible local workflow. The design emphasizes explicit contracts, safe failure, reconciliation, and analytical grains that can be checked independently.",
          ],
        },
      ],
    },
    {
      id: "source-contract",
      title: "Source contract",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "9", label: "source files" },
            { value: "1,550,922", label: "total source rows" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The 9 source files contain 1,550,922 rows in total. Strict manifest validation checks the required filenames, exact header names and order, UTF-8 and BOM handling, field counts, and expected row counts before PostgreSQL changes begin.",
            "Validating at the file boundary prevents a malformed, missing, or silently changed source from becoming a partially loaded database state that downstream models might mistake for valid data.",
          ],
        },
      ],
    },
    {
      id: "architecture",
      title: "End-to-end architecture",
      blocks: [
        { type: "figure", figure: olistImages.pipeline },
        {
          type: "paragraphs",
          paragraphs: [
            "Olist CSV files pass through strict manifest validation and transactional PostgreSQL ingestion into raw_olist. dbt then builds source-aligned staging views, intermediate models, and dimensional marts before Airflow validates dbt artifacts and independently verifies the marts.",
            "The original source-project handoff documented Power BI as a future phase and did not include a .pbix file. The reporting screenshots on this portfolio page represent later portfolio work; they do not retroactively change what the original repository handoff contained.",
          ],
        },
      ],
    },
    {
      id: "airflow",
      title: "Airflow orchestration",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "17", label: "logical Airflow tasks" },
            { value: "9", label: "dynamically mapped raw loads" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "The DAG’s 17 logical tasks include 9 mapped loads. It sequences source validation, PostgreSQL preparation, those mapped raw loads, a raw quality gate, a conditional dbt dependency branch, a dbt full-refresh build and tests, dbt result validation, dbt documentation, dimensional-mart verification, and a run summary.",
            "Dynamic mapping gives each of the nine source loads its own task-instance visibility while preserving one logical load step in the workflow. Failed validation or quality gates stop dependent work rather than allowing a partial pipeline to continue.",
          ],
        },
      ],
    },
    {
      id: "ingestion",
      title: "Transactional ingestion",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Raw ingestion performs a transactional full replacement with schema validation, audit logging, rollback safeguards, and post-load quality checks. If the source contract fails, database replacement never begins; if a load or check fails, the transaction protects the prior consistent raw state.",
            "This deliberately favors repeatable snapshot replacement and safe recovery over incremental complexity for the documented static source contract.",
          ],
        },
      ],
    },
    {
      id: "warehouse",
      title: "dbt warehouse",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "9", label: "raw tables" },
            { value: "9", label: "typed staging views" },
            { value: "7", label: "intermediate models" },
            { value: "8", label: "dimensional marts" },
          ],
          note: "The intermediate layer contains six views plus one table-backed canonical geography model; the marts contain five dimensions and three facts.",
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Staging preserves source alignment while applying types and names. Intermediate models aggregate repeated-grain records, prevent fan-out, and establish canonical geography. The mart layer publishes explicit dimensional grains for analytical consumption.",
          ],
        },
      ],
    },
    {
      id: "data-model",
      title: "Data model",
      blocks: [
        { type: "figure", figure: olistImages.schema },
        {
          type: "paragraphs",
          paragraphs: [
            "The visible schema is a fact constellation with five dimensions and three native-grain facts. Shared customer, geography, seller, date, and product dimensions support facts at order, order-item sales, and payment grains without forcing unlike measures into one table.",
            "Role-playing date and geography relationships are shown explicitly, while the diagram notes that the analytical PK/FK labels represent tested contracts rather than physical PostgreSQL constraints.",
          ],
        },
      ],
    },
    {
      id: "quality",
      title: "Data quality",
      blocks: [
        {
          type: "metrics",
          metrics: [
            { value: "24", label: "dbt models" },
            { value: "311", label: "blocking data tests" },
            { value: "PASS=335", label: "verified dbt build result" },
          ],
        },
        {
          type: "paragraphs",
          paragraphs: [
            "Blocking checks cover model grain, relationships, source preservation, reconciliation, core orphans, continuous dates, and final mart verification. Airflow also validates dbt run results rather than assuming a command exit alone proves that every expected node passed.",
          ],
        },
      ],
    },
    {
      id: "postgres-verification",
      title: "PostgreSQL verification",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "Independent SQL verification checks raw source counts, expected mart inventory, fact grain, payment, item, and freight reconciliation, core relationship integrity, and date continuity. These checks create a second line of evidence beyond dbt success and help catch publication or warehouse-state problems.",
          ],
        },
      ],
    },
    {
      id: "analytics",
      title: "Regional marketplace analytics",
      blocks: [
        {
          type: "paragraphs",
          paragraphs: [
            "The later portfolio report asks where observed customer demand outpaces local seller participation and where regional seller-recruitment investigation may be justified. It is a screening tool: it does not claim proven recruitment results, causal marketplace growth, or guaranteed revenue impact.",
          ],
        },
        {
          type: "gallery",
          figures: [
            olistImages.home,
            olistImages.reportingContext,
            olistImages.stateOpportunityDeepDive,
            olistImages.decisionSummary,
          ],
        },
        {
          type: "subsection",
          title: "Overview and state investigation",
          paragraphs: [
            "The hero overview compares state-level demand, same-state coverage, interstate dependence, and active local seller participation. The detail and decision-summary pages then expose category, seller-origin, and time evidence for a selected state and end with validation steps rather than a claim that recruitment will succeed.",
          ],
        },
      ],
    },
    {
      id: "lessons",
      title: "Engineering lessons",
      blocks: [
        {
          type: "bullets",
          items: [
            "Strict source contracts reduce uncertainty before database work starts.",
            "Mapped tasks improve independent observability for parallel source loads.",
            "Transactional replacement protects raw consistency during failure.",
            "Reconciliation should provide evidence independently of dbt success.",
            "Dimensional marts need explicit and testable grains.",
            "Failure paths should stop downstream work safely and visibly.",
          ],
        },
      ],
    },
    {
      id: "limitations",
      title: "Limitations",
      blocks: [
        {
          type: "bullets",
          items: [
            "The source is a static snapshot loaded through full replacement, and dbt runs as a full refresh.",
            "There is no incremental loading or change data capture.",
            "The source project has no cloud deployment, CI/CD, or external alerting.",
            "Geography matching is deterministic but not fuzzy, and no PostGIS processing is used.",
            "Payments are not allocated to individual items.",
            "Review text is not exposed in the dimensional marts.",
            "The original handoff did not include a .pbix file; the shown report is later portfolio work.",
          ],
        },
      ],
    },
  ],
};

export const projectCaseStudies = [
  movieCaseStudy,
  olistCaseStudy,
] as const satisfies readonly ProjectCaseStudy[];

export function getProjectCaseStudy(
  slug: string,
): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((caseStudy) => caseStudy.projectSlug === slug);
}
