export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Zixun Huang",
  title: "Senior Research Scientist",
  institution: "Bosch | UC Berkeley",
  // Note that links work in the description
  description: "Good representations arise from simple underlying structure.",
  email: "zixun@berkeley.edu",
  imageUrl: "/ZIXUNH.PNG",
  googleScholarUrl: "https://scholar.google.com/citations?user=-LG4tX8AAAAJ&hl=en",
  githubUsername: "zixunh",
  linkedinUsername: "zixunhuang",
  // twitterUsername: "zixun_h",
  // blogUrl: "https://",
  // cvUrl: "https://",
  // institutionUrl: "https://",
  // altName: "黄 梓洵",
  // secretDescription: "I like cats.",
};
