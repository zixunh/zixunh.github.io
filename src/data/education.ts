export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2022—2024",
  //   institution: "UC Berkeley",
  //   degree: "Master's in HCI",
  //   advisor: "Prof. Allen Yang",
  // },
  // {
  //   year: "2015-2020",
  //   institution: "Zhejiang University",
  //   degree: "Bachelor's in Architecture",
  //   // thesis: "Algorithmic Approaches to Causal Discovery",
  //   // Optional links to thesis
  //   // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  // },
];
