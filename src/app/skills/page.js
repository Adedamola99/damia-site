"use client";
import SkillSection from "../../components/SkillSection";
import { motion } from "framer-motion";

import pythonIcon from "../../assets/icons/Python.svg";
import javascriptIcon from "../../assets/icons/JS.svg";
import htmlIcon from "../../assets/icons/HTML.svg";
import cssIcon from "../../assets/icons/CSS.svg";
import reactIcon from "../../assets/icons/React.svg";
import nodeIcon from "../../assets/icons/NodeJS.svg";
import firebaseIcon from "../../assets/icons/Firebase.svg";
import GitIcon from "../../assets/icons/Git.svg";
import GithubIcon from "../../assets/icons/Github.svg";
import VsCodeIcon from "../../assets/icons/VsCode.svg";
import FigmaIcon from "../../assets/icons/Figma.svg";
import BootStrapIcon from "../../assets/images/bootstrap.png";
import JqueryIcon from "../../assets/images/jquery.png";
import TailwindIcon from "../../assets/images/tailwind-css.png";
import SassIcon from "../../assets/images/sass.png";
import NextJsIcon from "../../assets/images/nextJs.png";
import TypeScriptIcon from "../../assets/images/typescript.png";
import MongoDbIcon from "../../assets/images/mongoDb.png";

const SkillsPage = () => {
  const programmingLanguages = [
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Python", icon: pythonIcon },
  ];

  const frontendSkills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Tailwind", icon: TailwindIcon },
    { name: "Bootstrap", icon: BootStrapIcon },
    { name: "Jquery", icon: JqueryIcon },
    { name: "Sass", icon: SassIcon },
    { name: "React", icon: reactIcon },
    { name: "NextJs", icon: NextJsIcon },
  ];

  const backendSkills = [
    { name: "Node.js", icon: nodeIcon },
    { name: "MongoDB", icon: MongoDbIcon },
    { name: "Firebase", icon: firebaseIcon },
  ];

  const mobileDevSkills = [{ name: "React Native", icon: reactIcon }];

  const tools = [
    { name: "Git", icon: GitIcon },
    { name: "VS Code", icon: VsCodeIcon },
    { name: "Figma", icon: FigmaIcon },
    { name: "GitHub", icon: GithubIcon },
  ];

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="py-8 min-h-screen mt-10 lg:mt-0"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>

      <SkillSection
        title="Programming Languages"
        skills={programmingLanguages}
      />
      <SkillSection title="Frontend Development" skills={frontendSkills} />
      <SkillSection title="Backend Development" skills={backendSkills} />
      <SkillSection title="Mobile App Development" skills={mobileDevSkills} />
      <SkillSection title="Tools I Use" skills={tools} />
    </motion.div>
  );
};

export default SkillsPage;
