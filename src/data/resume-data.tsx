import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rasmus Buchholdt",
  location: "Aalborg, Denmark",
  locationLink: "https://www.google.com/maps/place/Aalborg",
  about: "Full-stack developer",
  metaDescription: 'Full-stack developer, that loves to learn new technologies and solve problematic challenges.',
  summary: [
    'Full-stack developer, that loves to learn new technologies and solve problematic challenges.',
    'Skillset is very wide, everything from laying out architecture of big projects to implementing the backend in .NET and frontend in Angular/React with continuous integration.',
    'I have a M.Sc in Computer Science and run Openomic, where I manage the business and work as a full-stack developer overseeing projects, working closely with customers from the initial meetings to long-term relationships.'
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/9290148?v=4",
  personalWebsiteUrl: "https://buchholdt.dev",
  contact: {
    email: "rasmus@buchholdt.dev",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rasmusbuchholdt",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rasmusbuchholdt",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Aalborg University",
      degree: "Master's degree, Computer Science",
      start: "2020",
      end: "2022",
    },
    {
      school: "Aalborg University",
      degree: "Bachelor's degree, Computer Science",
      start: "2019",
      end: "2020",
    },
    {
      school: "Erhvervsakademi Dania",
      degree: "AP Graduate, Computer Science",
      start: "2016",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Openomic ApS",
      link: "https://openomic.dk/",
      badges: [],
      title: "Co-Founder & Full Stack Developer",
      start: "2021",
      end: undefined,
      description: `
        My primary role is development, where I am in charge of Openomic's cloud infrastructure, handling everything from the server setup/maintenance and our continuous integration setup. 
        I am also involved directly with customers, from the first meeting to the final hand-over meeting.
      `,
    },
    {
      company: "Aalborg University",
      link: "https://www.aau.dk/",
      badges: ["Part-time"],
      title: "Research Assistant",
      start: "2022",
      end: "2022",
      description: `I was a research assistant on Human-AI collaboration: Engaging and controlling swarms of robots and drones (HERD), where my primary role was development.`,
    },
    {
      company: "Frontmatec",
      link: "https://www.frontmatec.com",
      badges: ["Internship"],
      title: "Software Developer Internship",
      start: "2018",
      end: "2018",
      description: `
        Throughout my internship, I was introduced to a very large code base, where I had to learn their practices and understand a complex domain.
        My primary job was implementing and adjusting features in their existing systems. These systems involved a large WPF application and their newer web-based Angular application.
      `,
    },
  ],
  skills: [],
  projects: [],
} as const;
