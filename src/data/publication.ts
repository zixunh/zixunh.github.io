export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2026",
    conference: "ICLR",
    title: "3DGEER: 3D Gaussian Rendering Made Exact and Efficient for Generic Cameras",
    authors: "Zixun Huang, Cho-Ying Wu, Yuliang Guo, Xinyu Huang, Liu Ren",
    // paperUrl: "https://arxiv.org/abs/2505.24053",
    // codeUrl: "https://github.com/boschresearch/3dgeer",
    // bibtex: "https://arxiv.org/abs/2505.24053.bib",
    tldr: "We present 3DGEER, a formulation for exact and efficient Gaussian rendering under generic camera models, eliminating approximation errors introduced by splatting-based methods.",
    imageUrl:
      "https://69a8c69562aea864bacd7cca.imgix.net/my_research_website/0304%20(1).gif",
    award: "ICLR Reviewer Score: Top 1%",
    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2505.24053"
      },
      {
        label: "Code",
        url: "https://github.com/boschresearch/3dgeer"
      },
      {
        label: "Project Page",
        url: "https://zixunh.github.io/3d-geer"
      },
      {
        label: "Video (Presentation)",
        url: "https://www.youtube.com/live/9l2nXoQj5s8?si=7u1l3VZt2iM0n9kL"
      }
    ]
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2026",
    conference: "CVPR",
    title: "No Calibration, No Depth, No Problem: Cross-Sensor View Synthesis with 3D Consistency",
    authors: "Cho-Ying Wu, Zixun Huang, Xinyu Huang, Liu Ren",
    tldr: "The work synthesizes view-aligned RGB-X pairs (thermal, NIR, SAR, Normal maps ...) from either raw sensor sequences or style maps to facilitate multi-modality learning. The work proposes a match-densify-consolidate framework to work from cross-modal image matching, guided densification, and consolidation in 3DGS.",
    imageUrl:"https://69a8c69562aea864bacd7cca.imgix.net/my_research_website/rgbx.gif",
    links: [
      {
          label: "Paper",
          url: "https://arxiv.org/abs/2505.24053"
      },
      {
          label: "Project Page",
          url: "https://choyingw.github.io/3d-rgbx.github.io/"
      }
    ]
  },
  {
    year: "2026",
    conference: "CVPR",
    title: "NexusFlow: Unifying Disparate Tasks under Partial Supervision via Invertible Flow Networks",
    authors: "Fangzhou Lin, Yuping Wang, Yuliang Guo, Zixun Huang, Xinyu Huang, Haichong Zhang, Kazunori Yamada, Zhengzhong Tu, Liu Ren, Ziming Zhang",
    tldr: "Can we learn across multiple tasks when Task 1 data is collected in region A and Task 2 data in region B? We introduce NexusFlow, a plug-and-play framework based on invertible flow networks that is effective for Partially Supervised Multi-Task Learning (PS-MTL) and the joint learning of diverse dense and sparse prediction tasks.",
    imageUrl:"https://69a8c69562aea864bacd7cca.imgix.net/my_research_website/nexux.png",
    links: [
      {
          label: "Paper",
          url: "https://arxiv.org/abs/2512.06251"
      },
      {
          label: "Code",
          url: "https://github.com/ark1234/NexusFlow"
      }
    ]
  },
  {
    year: "2025",
    conference: "CVPR (Workshop Oral)",
    title: "Robust 6DoF Pose Estimation Against Depth Noise and a Comprehensive Evaluation on a Mobile Dataset",
    authors: "Zixun Huang*, Keling Yao*, Seth Z. Zhao, Chuanyu Pan, Allen Y. Yang",
    tldr: "We introduce DTTD-Mobile, a benchmark for evaluating 6DoF pose estimation under noisy mobile depth sensing. We further propose DTTD-Net, a Fourier-enhanced RGBD fusion architecture designed to improve robustness against low-quality depth inputs.",
    imageUrl:"https://69a8c69562aea864bacd7cca.imgix.net/my_research_website/WCWDIehG2-xa_VP6TS28G.gif",
    // paperUrl: "https://openaccess.thecvf.com/content/CVPR2025W/MAI/html/Huang_Robust_6DoF_Pose_Estimation_Against_Depth_Noise_and_a_Comprehensive_CVPRW_2025_paper.html",
    // codeUrl: "https://github.com/augcog/DTTD2",
    links: [
      {
          label: "Paper",
          url: "https://openaccess.thecvf.com/content/CVPR2025W/MAI/html/Huang_Robust_6DoF_Pose_Estimation_Against_Depth_Noise_and_a_Comprehensive_CVPRW_2025_paper.html"
      },
      {
          label: "Code",
          url: "https://github.com/augcog/DTTD2"
      },
      {
          label: "Project Page",
          url: "https://openark-berkeley.github.io/DTTDNet/"
      },
      {
          label: "Dataset Download",
          url: "https://huggingface.co/datasets/ZixunH/DTTD2-IPhone"
      },
      {
          label: "Video (Oral Presentation)",
          url: "https://www.youtube.com/live/hUC7SGEYsl0?si=2jWLkaSu9Twn8jee"
      }
    ]
  },
];
