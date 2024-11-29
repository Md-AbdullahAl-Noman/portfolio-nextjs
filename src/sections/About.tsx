import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
// import JavaScriptIcon from "@/assets/icons/javascript.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHub from "@/assets/icons/github.svg";
import JsIcon from "@/assets/icons/square-js.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import myMapIcon from "@/assets/images/mapimage.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItem from "@/components/ToolBoxItem";

const skillsAndTools = [
  // Programming Languages
  {
    title: "JavaScript",
    iconType: JsIcon,
  },
  // {
  //   title: "C++",
  //   iconType: "",
  // },
  // {
  //   title: "Java",
  //   iconType: "",
  // },

  // {
  //   title: "Python",
  //   iconType: "",
  // },
  // {
  //   title: "PHP",
  //   iconType: "",
  // },
  // {
  //   title: "TypeScript",
  //   iconType: "",
  // },
  // {
  //   title: "C#",
  //   iconType: "ite",
  // },

  // Frontend Development
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  // {
  //   title: "MUI",
  //   iconType: "",
  // },
  // {
  //   title: "Radix UI",
  //   iconType: "",
  // },
  // {
  //   title: "Ant Design",
  //   iconType: "",
  // },
  // {
  //   title: "TailwindCSS",
  //   iconType: "",
  // },

  // State Management
  // {
  //   title: "Zustand",
  //   iconType: "",
  // },
  // {
  //   title: "Redux",
  //   iconType: "",
  // },
  // {
  //   title: "Redux-Toolkit",
  //   iconType: "",
  // },

  // {
  //   title: "Context-API",
  //   iconType: "",
  // },
  // {
  //   title: "Zod",
  //   iconType: "",
  // },

  // Backend Development
  // {
  //   title: "NodeJS",
  //   iconType: "",
  // },
  // {
  //   title: "Express.js",
  //   iconType: "",
  // },
  // {
  //   title: "Nodemon",
  //   iconType: "",
  // },
  // {
  //   title: "Next JS",
  //   iconType: "",
  // },
  // {
  //   title: "NestJS",
  //   iconType: "",
  // },
  // {
  //   title: "JWT",
  //   iconType: "",
  // },
  // {
  //   title: "NPM",
  //   iconType: "",
  // },
  // {
  //   title: ".Net",
  //   iconType: "",
  // },
  // {
  //   title: "Django",
  //   iconType: "",
  // },

  // Database Management
  // {
  //   title: "MongoDB",
  //   iconType: "",
  // },
  // {
  //   title: "MySQL",
  //   iconType: "",
  // },
  // {
  //   title: "Postgres",
  //   iconType: "",
  // },
  // {
  //   title: "Prisma",
  //   iconType: "",
  // },

  // // Mobile Development
  // {
  //   title: "React Native",
  //   iconType: "",
  // },

  // // Development Tools
  // {
  //   title: "Vite",
  //   iconType: "",
  // },
  // {
  //   title: "Git",
  //   iconType: "",
  // },
  // {
  //   title: "GitHub",
  //   iconType: "",
  // },
  // {
  //   title: "Postman",
  //   iconType: "",
  // },
  // {
  //   title: "Docker",
  //   iconType: "",
  // },
  // {
  //   title: "Netlify",
  //   iconType: "",
  // },
  // {
  //   title: "Vercel",
  //   iconType: "",
  // },

  // // Data Science & AI Tools
  // {
  //   title: "NumPy",
  //   iconType: "",
  // },
  // {
  //   title: "Pandas",
  //   iconType: "",
  // },
  // {
  //   title: "scikit-learn",
  //   iconType: "",
  // },
  // {
  //   title: "Matplotlib",
  //   iconType: "",
  // },

  // // UI/UX and Design
  // { title: "Figma", iconType: "" },
];
const hobbies = [
  {
    title: "Music",
    emoji: "🎵",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Playing Video Games",
    emoji: "🎮",
  },
  {
    title: "Singing",
    emoji: "🎤",
  },
  {
    title: "Traveling",
    emoji: "🌍",
  },
];
export const AboutSection = () => {
  return (
    <div className="mt-16">
      <div className="container">
        <SectionHeader
          eyeBrowText="About Me"
          title="A Glimpse Into My World😊"
          description="Learn more about who I am, what I do, and how my skills align with your needs."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description=" Explore the books that have shaped my perspective and knowledge."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My TookBox"
              description="Explore my cutting edge technological skills and tools I use to
                craft innovative solutions."
              className="px-6 pt-6"
            />
            <ToolBoxItem items={skillsAndTools} />
            
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my passions, hobbies, and interests."
            />

            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="Map" />
            <Image src={myMapIcon} alt="MyMap" />
          </Card>
        </div>
      </div>
    </div>
  );
};
