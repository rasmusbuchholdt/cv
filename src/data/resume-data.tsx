import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Rasmus Buchholdt",
  location: "Aalborg, Denmark",
  locationLink: "https://www.google.com/maps/place/Aalborg",
  about: "Lorem ipsum",
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
