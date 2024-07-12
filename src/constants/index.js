
import TYPING  from   "../assets/projects/TYPING.gif"
import news  from   "../assets/projects/news.gif"
import memory  from   "../assets/projects/memory.gif"
import react from  "../assets/react.jpg"
import node from  "../assets/node.jpg"
import sql from  "../assets/sql.jpg"
import rest from  "../assets/rest.jpg"
import bootstrap from  "../assets/bootstrap.jpg"
import full from  "../assets/full.jpg"

export const HERO_CONTENT = `As a dedicated and enthusiastic full stack developer, I am eager to embark on my professional journey in crafting dynamic and efficient web applications. With a strong foundation in front-end technologies like React and back-end frameworks such as Django and Node.js, I have developed a keen interest in creating seamless and interactive user experiences. My experience with databases like MySQL and MongoDB has equipped me with the skills to manage and organize data effectively. I am excited to apply my knowledge and passion for technology to develop innovative solutions that enhance user satisfaction and contribute to business success.`;

export const ABOUT_TEXT = `A learning enthusiast who loves to learn about new technologies and a dedicated, versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const certificate = [react , node , rest , full , bootstrap , sql ]

export const EXPERIENCES = [
  {
    year: "August,2023 - December,2023",
    role: "Technical Research Analyst",
    company: "Intellipaat ",
    description: `honed my skills in data analysis and market research. I conducted comprehensive studies, analyzed data, and generated insightful reports, collaborating with a dynamic team.	Aiding Intellipaat to genrate revenue by 10% more than previous year.
`,
    technologies: ["Ms Excel" , "Pyhton" , "ML"],
  },
  {
    year: "April,2022 - July,2022",
    role: "Frontend Developer Intern",
    company: "Franchive Pvt. Ltd.",
    description: `•	Engineered the introductory section, footer, and static label form of the website https://www.franhive.com, enhancing user engagement and interface usability.Implemented SEO optimization strategies, resulting in a 15% increase in organic traffic. `,
    technologies: ["HTML", "CSS", "Javascript", "React"],
  },
  
];

export const PROJECTS = [
  {
    title: "Code With Companion",
    image: "https://res.cloudinary.com/dl2mkfkqh/image/upload/v1676667286/Resume/GIF/companion_icxohq.gif",
    description:
      "Realtime Collaborative website for coding with call Support",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link : "https://code-with-companion.vercel.app/#/f413dfe3-1489-4ddd-870f-45dfded58e5d"
  },
  {
    title: "Typing Speed",
    image: TYPING,
    description:
      "User can check his typing speed up to 99% accuracy , Implemented user-friendly UI for -typing tests and exercises",

    technologies: ["HTML", "CSS", "React"],
    link : "https://touch-type-three.vercel.app/"
  },
  {
    title: "News App",
    image: news,
    link: "https://teleport-project.vercel.app/",
    description:
      "Developed an app that calls RESTful APIs to display the latest news on the user interface.Implemented functionality to respond to text changes in the search bar, suggesting the latest and trending news based on the entered alphabet",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Node" , "MySQL"],
  },
  {
    title: "Memory Game",
    image: memory,
    link: "https://food-app-8kbi.vercel.app/",
    description:
      "required to memorize and replicate the sequence of colors displayed.Enhance cognitive abilities by 5% ",
    technologies: ["HTML", "CSS", "React" , "Tailwaind"],
  },
];

export const CONTACT = {
  address: "276 phase 2 Somdutt Vihar, Meerut, Uttar Pradesh, India  250004",
  phoneNo: "+91 85320 33377 ",
  email: "digvijayintel@gmail.com",
};
