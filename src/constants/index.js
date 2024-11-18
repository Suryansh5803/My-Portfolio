import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  excel,
  html,
  css,
  python,
  powerbi,
  eviews,
  mysql,
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
  rstudio,
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
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "Business Analyst",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "E-Views",
    icon: eviews,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "R - Studio",
    icon: rstudio,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
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
];

const experiences = [
  {
    title: "Financial Analyst",
    company_name: "Bajaj Hindusthan Sugar Ltd.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Analyze financial statements, market trends, and key financial metrics to derive insights and support decision-making processes.",
      "Conduct detailed ratio analysis to assess the company's financial health, prepare comprehensive reports, and present findings to stakeholders.",
      "Develop models using Python, predict future stock prices, and generate accurate forecasts for the company’s financial performance.",
      "Manage and utilize the SAP ERP system for financial data management, ensuring data integrity and supporting financial analysis",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Bajaj Hindusthan Sugar Ltd.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Conducted in-depth analysis of sugar cane purchase data using Python.",
      "Implemented advanced machine learning techniques to derive insights and optimize predictive models.",
      "Collaborated with domain experts, gaining valuable knowledge about sugar cane farming processes,transportation logistics, and historical trends.",
      "Developed an interactive and user-friendly dashboard for the company to monitor the variety of sugarcane purchased.",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "ENTREPRENEUR CAFE",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Organized successful meet-ups and networking events, positioning Entrepreneur's Cafe as a valuable resource for entrepreneurs in the city.",
      "Handled social media accounts and created a comprehensive brochure, contributing to the growth and success of the organization and its members.",
      "Compiled and presented detailed reports for the annual global convention, and developed and executed a sponsorship strategy.",
      "Worked closely with city officials and community leaders to advocate for and promote entrepreneurship and innovation, helping to create a supportive environment.",
    ],
  },
  {
    title: "SEO Specialist",
    company_name: "HEALING HOME WELLNESS PVT LTD.",
    icon: shopify,
    iconBg: "white",
    date: "Jun 2022 - Dec 2023",
    points: [
      "Executed a comprehensive SEO strategy, yielding a remarkable 55% increase in organic search traffic within six months.",
      "Conducted extensive keyword research and competitor analysis to inform on-page optimization and content strategy.",
      "Collaborated with the development team to implement technical SEO best practices, ensuring website compliance.",
      "Generated approximately 3000 backlinks for Healing Home Wellness, contributing to improved organic search rankings, increased website traffic, and a positive ROI for the client.",
    ],
  },
];

const certificates = [
  {
    image: "src/assets/certificate/NPTEL.png",
    courseName: "Business Analytics & Text Mining Modeling Using Python",
    organization: "NPTEL",
    validationLink: "https://udemy.com/validate-certificate-link",
  },
  {
    image: "src/assets/certificate/CC.png",
    courseName: "Deep Learning Fundamentals",
    organization: "Cognitive Class",
    validationLink:
      "https://courses.cognitiveclass.ai/certificates/5bb2b552200946c2951a34d2d85db0fd",
  },
  {
    image: "src/assets/certificate/Google.png",
    courseName: "The Fundamentals of Digital Marketing",
    organization: "Google",
    validationLink: "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
  },
  {
    image: "src/assets/certificate/CC2.png",
    courseName: "Introduction to Cloud",
    organization: "Cognitive Classes",
    validationLink:
      "https://courses.cognitiveclass.ai/certificates/ff494f1e95264a44bba5df9248b72a3c",
  },
  {
    image: "src/assets/certificate/CC3.png",
    courseName: "Data Science Methedology",
    organization: "Cognitive Class",
    validationLink:
      "https://courses.cognitiveclass.ai/certificates/9764aef5e6b64b43a2688f76550fd963",
  },
  {
    image: "src/assets/certificate/CC4.png",
    courseName: "Data Visualization with Python",
    organization: "Cognitive Class",
    validationLink:
      "https://courses.cognitiveclass.ai/certificates/b7e8052f74eb48d3801cf0af3ace0c05",
  },
  {
    image: "src/assets/certificate/CC5.png",
    courseName: "Python 101 for Data Science",
    organization: "Cognitive Class",
    validationLink:
      "https://courses.cognitiveclass.ai/certificates/6edf168a12c34edc96b97a0154e7e65e",
  },
];

const projects = [
  {
    name: "Costumer Analysis Dashboard",
    description:
      "Power BI dashboard analyzing the Super Store dataset with dynamic visualizations,Costumer enhanced interactivity and insights.",
    tags: [
      {
        name: "Power BI",
        color: "blue-text-gradient",
      },
      {
        name: "Data VIsualization",
        color: "green-text-gradient",
      },
      {
        name: "Dashboard",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/Suryansh5803/Retail-Costumer-Analysis",
  },
  {
    name: "Ad Click Prediction",
    description:
      "A machine learning model to optimize ad targeting by predicting user click behavior, increasing click-through rates and save advertisement costs .",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/Suryansh5803/Customer-Ad-Click-Prediction",
  },
  {
    name: "Finacial Analysis and Stock price prediction",
    description:
      "Includes code, analysis, and documentation for predicting and analyzing Bajaj Hindusthan Sugar Ltd.'s stock prices using advanced machine learning techniques.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Suryansh5803/Stock-Price-Prediction-Analysis---Bajaj-Hindusthan-Sugar-LTD.",
  },
];

export { services, technologies, experiences, certificates, projects };
