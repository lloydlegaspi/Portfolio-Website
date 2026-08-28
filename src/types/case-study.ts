export interface CaseStudyFigureData {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  note?: string;
}

export type CaseStudyBlock =
  | {
      type: "paragraphs";
      paragraphs: readonly string[];
    }
  | {
      type: "bullets";
      items: readonly string[];
    }
  | {
      type: "figure";
      figure: CaseStudyFigureData;
    }
  | {
      type: "gallery";
      figures: readonly CaseStudyFigureData[];
    }
  | {
      type: "metrics";
      metrics: readonly CaseStudyMetric[];
      note?: string;
    }
  | {
      type: "subsection";
      title: string;
      paragraphs?: readonly string[];
      bullets?: readonly string[];
    }
  | {
      type: "callout";
      title: string;
      text: string;
    };

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: readonly CaseStudyBlock[];
}

export interface ProjectCaseStudy {
  projectSlug: string;
  disciplines: readonly string[];
  intro: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: CaseStudyFigureData;
  sections: readonly CaseStudySection[];
}
