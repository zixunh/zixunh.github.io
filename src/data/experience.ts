export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  // {
  //   date: "Mar. 2024 - Present",
  //   title: "Research Scientist",
  //   company: "Bosch",
  //   // description:
  //   //   "Developed novel algorithms for causal structure learning in reinforcement learning settings",
  //   // manager: "Xinyu Huang",
  //   companyUrl: "https://www.bosch.com/research/bcai/",
  // },
  // {
  //   date: "Sep. 2022 - Aug. 2024",
  //   title: "Graduate Researcher",
  //   company: "UC Berkeley",
  //   // description:
  //   //   "Worked on improving robustness of large language models to distribution shifts",
  //   advisor: "Allen Y. Yang",
  //   companyUrl: "https://vivecenter.berkeley.edu/",
  // },
  // {
  //   date: "Mar. 2019 - Jun. 2020",
  //   title: "Teaching Assistant (Robotics)",
  //   company: "Zhejiang University",
  //   // description:
  //   //   "Worked on improving robustness of large language models to distribution shifts",
  //   // advisor: "Allen Y. Yang",
  //   // companyUrl: "https://vivecenter.berkeley.edu/",
  // },
];
