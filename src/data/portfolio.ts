export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  award?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const portfolioData: Portfolio[] = [
  // Example entry
  {
    title: "China's First All-Carbon Fiber Architectural Structure Fabricated by Robotic Manipulation",
    description:
      "A full-scale architectural structure fabricated using robotic carbon-fiber winding. The project investigates lightweight structural systems enabled by robotic precision and material optimization. The resulting structure achieves a density of 18 kg/m³ with a load-bearing capacity of 400 kg.",
    award: "Featured by CNN and 10+ international media outlets",
    technologies: ["KUKA Programming", "3D Modeling", "3D Printing", "SolidWorks"],
    links: [
      {
        label: "ArchDaily",
        url: "https://www.archdaily.com/913684/shrine-of-whatslove-wutopia-lab"
      },
      {
        label: "Dezeen",
        url: "https://www.domusweb.it/en/local-editions/china/architecture/2019/07/05/shrine-of-whatslove.html"
      },
      {
        label: "Domus",
        url: "https://www.domusweb.it/en/local-editions/china/architecture/2019/07/05/shrine-of-whatslove.html"
      },
      {
        label: "Metalocus",
        url: "https://www.metalocus.es/en/news/shrine-whatslove-wutopia-lab"
      },
      {
        label: "Arch2o",
        url: "https://www.arch2o.com/shrine-of-whatslove-wutopia-lab/"
      },
      {
        label: "Architizer",
        url: "https://architizer.com/projects/shrine-of-whatslove/"
      },
      {
        label: "Gooood",
        url: "https://www.gooood.cn/shrine-of-whatslove-china-wutopia-lab.htm"
      },
      {
        label: "Video (Fabrication Process)",
        url: "https://www.youtube.com/watch?v=bJ-8Ytwos4I"
      }
    ],
    imageUrl:
      "/shrine/assets/img/teaser.gif",
    // codeUrl: "https://github.com/username/project",
  },
  {
    title: "Towards Reusable Robotic Formwork for Mass Customization",
    description:
      "This line of work explores robotic fabrication techniques for reusable casting molds in curved concrete construction. The research addresses the material and economic inefficiency of single-use molds by developing hybrid clay-foam formwork systems fabricated with 6-axis robotic arms.",
    technologies: ["KUKA Programming", "3D Modeling", "3D Printing", "Rhino3D", "Arduino"],
    links: [
      {label: "SIGraDi 2020", url: "https://www.proceedings.blucher.com.br/article-details/robotic-fabrication-of-sustainable-hybrid-formwork-with-clay-and-foam-for-concrete-casting-35460"},
      {label: "IASS 2019", url: "https://www.ingentaconnect.com/content/iass/piass/2019/00002019/00000006/art00004?crawler=true&mimetype=application/pdf"},
      {label: "Video (SIGraDi 2020)", url: "https://www.youtube.com/watch?v=WWiFGQ9dVF4"},
      {label: "Furniture Gallery 1", url: "https://www.zeeliang.com/emerging"},
      {label: "Furniture Gallery 2", url: "https://www.zeeliang.com/carbonfiberfurniture"},
    ],
    imageUrl:
      "/formwork/assets/img/teaser.gif",
    // codeUrl: "https://github.com/username/project",
  },
  {
    title: "Archetype Representation Learning for Urban Energy Modeling",
    description:
      "We develop a self-supervised framework for automatically generating localized building archetypes with detailed geometric representations for urban energy modeling.",
    award: "Cited by LBNL and ORNL",
    technologies: ["Representation Learning", "Energy Modeling"],
    links: [
      {label: "ICCV Workshop (CVAAD) 2023", url: "https://openaccess.thecvf.com/content/ICCV2023W/CVAAD/html/Zhuang_MARL_Multi-scale_Archetype_Representation_Learning_for_Urban_Building_Energy_Modeling_ICCVW_2023_paper.html"},
      {label: "ACADIA 2023", url: "/marl/assets/paper/ACADIA2023_MARL.pdf"},
      {label: "Video (Oral Presentation)", url: "https://www.youtube.com/watch?v=cUzrrltZBcY"},
      {label: "Code", url: "https://github.com/zixunh/MARL"},
      {label: "Poster", url: "https://xinwei-zhuang.github.io/files/2023%20ICCV%20poster.pdf"},
    ],
    imageUrl:
      "/marl/assets/img/teaser.png",
    // codeUrl: "https://github.com/username/project",
  },
  {
    title: "Autonomous Discrete Construction with UAV Systems",
    description:
      "Development of a UAV-based discrete stacking system using onboard gripping and motion control. The project demonstrates autonomous aerial assembly through integrated perception, control, and fabrication workflows.",
    technologies: ["RaspberryPi 4", "3D Printing", "Motion Capture", "PX4", "ROS"],
    links: [
      {label: "Video (Fabrication Process)", url: "https://youtu.be/d-jheGgC-4k"},
    ],
    imageUrl:
      "/uav/assets/img/teaser.gif",
    // codeUrl: "https://github.com/username/project",
  }
];
