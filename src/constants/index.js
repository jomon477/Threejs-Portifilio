import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "3D Animator",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Video Editor Intern",
    company_name: "Inovus Labs IEDC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Novemeber 2021 - April 2022",
    points: [
      "Developing and maintaining animated videos using After Effects and other related softwares.",
      "Collaborating with cross-functional teams including designers and others to create high-quality videos.",
      "Implementing responsive design and ensuring maximum quality.",
      "Participating in Major design event around kerala.",
    ],
  },
  {
    title: "Animatist",
    company_name: "Shizha Table Tennis Academy",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - October 2022",
    points: [
      "Designs high quality character as a explainers.",
      "Releasing High End Designs",
      "VFX used on neccesity situations where content is on",
      "Best Employee of month (september).",
    ],
  },
  {
    title: "Social Media Intern",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "December 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Yip 5.0 Promo",
    description:
      "YIP 5.0 Promo,crafted with the help of software After Effects 2022.The promo captures the essence of YIP, highlighting its key features and the incredible opportunities.",
    tags: [
      {
        name: "KDISC",
        color: "blue-text-gradient",
      },
      {
        name: "AfterEffects2022",
        color: "green-text-gradient",
      },
      {
        name: "YIP5.0",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://drive.google.com/file/d/1LfRsjF_zO9-WlJz40lj9AKAFxojff9JC/view?usp=share_link",
  },
  {
    name: "Food Fest Promo",
    description:
      "Official Promo of the Delicacy Food Fest. This menu promo video is just a glimpse of the delectable delights that await you. With its interactive features, vibrant visuals.",
    tags: [
      {
        name: "foodmenu",
        color: "blue-text-gradient",
      },
      {
        name: "colorful",
        color: "green-text-gradient",
      },
      {
        name: "AE",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://drive.google.com/file/d/12VzSKj7S7HwQyUyfUhN2kRWxAnyiWxiC/view?usp=share_link",
  },
  {
    name: "Easter Special Promo",
    description:
      "As the promo unfolds, immerse yourself for the glorious moment when Jesus emerged from the tomb, bringing hope, redemption, and eternal life to all who believe..",
    tags: [
      {
        name: "Risen",
        color: "blue-text-gradient",
      },
      {
        name: "Jesus",
        color: "green-text-gradient",
      },
      {
        name: "23",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/11J2pk0iRiiuFEB8He2D6Ju99ep8cartT/view?usp=share_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
