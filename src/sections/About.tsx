import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";

import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHub from "@/assets/icons/github.svg";
import JsIcon from "@/assets/icons/square-js.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import myMapIcon from "@/assets/images/nomanMapImage.png";
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
    left: "68%",
    top: "50%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "48%",
    top: "2%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "70%",
    top: "15%",
  },
  {
    title: "Movies",
    emoji: "🎥",
    left: "40%",
    top: "30%",
  },
  {
    title: "Singing",
    emoji: "🎤",
    left: "10%",
    top: "35%",
  },
  {
    title: "Traveling",
    emoji: "🌍",
    left: "45%",
    top: "75%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "5%",
    top: "65%",
  },
];
export const AboutSection = () => {
  return (
    <div className="mt-16 mb-16 ">
      <div className="container">
        <SectionHeader
          eyeBrowText="About Me"
          title="A Glimpse Into My World😊"
          description="Learn more about who I am, what I do, and how my skills align with your needs."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description=" Explore the books that have shaped my perspective and knowledge."
              />
              <div className="w-40 mx-auto mt-8 md:mt-4 lg:mt-0 ">
                <Image src={bookImage} alt="Book" />
              </div>
            </Card>
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My ToolBox"
                description="Explore my cutting edge technological skills and tools I use to
                  craft innovative solutions."
                className=""
              />
              <ToolBoxItem
                items={skillsAndTools}
                className="mt-6"
                wrapperClassName="animate-move-left-animation [animation-duration:30s]"
              />
              <ToolBoxItem
                items={skillsAndTools}
                className="mt-6"
                wrapperClassName="-translate-x-1/2 animate-move-right-animation [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my passions, hobbies, and interests."
                className="px-6 pt-6"
              />
              <div className="mt-8 relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-md text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[140%] size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 p-2 after:content[''] after:outline after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 
                
              "
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:3s]"></div>
                <Image src={myMapIcon} alt="MyMap" className="size-12 translate-x-2 translate-y-2" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
