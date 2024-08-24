"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

// Données "À propos de moi"
const about = {
  title: "À propos de moi",
  description:
    "Je suis Laurent Mordier, un développeur Full Stack passionné avec une expérience de 2 ans. Curieux et autodidacte, j'aime aussi apprendre par moi-même et explorer de nouvelles technologies. Travailler sur des projets variés me permet de développer mes compétences techniques et personnelles, tout en renforçant ma capacité à m'adapter rapidement à de nouveaux défis.",
  info: [
    { fieldName: "Nom", fieldValue: "Laurent Mordier" },
    { fieldName: "Téléphone", fieldValue: "0695-30-57-73" },
    { fieldName: "Expérience", fieldValue: "2 ans" },
    { fieldName: "Nationalité", fieldValue: "Français" },
    { fieldName: "Langues", fieldValue: "Français, Anglais" },
    { fieldName: "Email", fieldValue: "laurent.mordier.pro@gmail.com" },
  ],
};

// Données d'expérience
const experience = {
  title: "Mon expérience",
  description:
    "Au cours de mes diverses expériences professionnelles, j'ai eu l'opportunité de travailler dans des environnements techniques variés, me permettant de développer des compétences en développement.",
  items: [
    {
      company: "Mission Fiverr",
      position: "Développeur Full Stack",
      duration: "2024 - Présent",
    },
    {
      company: "Chambre de l'Agriculture de Guadeloupe",
      position: "Stagiaire Informatique Systèmes et Réseaux",
      duration: "Mars 2024 - Mai 2024",
    },
    {
      company: "Hélium Technologies",
      position: "Développeur Stagiaire",
      duration: "Octobre 2023 - Décembre 2023",
    },
  ],
};

// Données éducatives
const education = {
  title: "Mon parcours",
  description:
    "Mon parcours académique m'a permis d'acquérir des bases solides en informatique et de me familiariser avec les différents aspects du développement. Chaque étape de ma formation a contribué à élargir mes compétences, tant sur le plan théorique que pratique. À travers des projets concrets et des certifications, j'ai progressivement développé mes connaissances en développement Full Stack, tout en restant engagé dans un apprentissage constant.",
  items: [
    {
      institution: "Université de limoges",
      degree: "Licence Pro 3ème année Mentier de l'Informatique",
      duration: "2024-Présent",
    },
    {
      institution: "Karuconnect",
      degree: "Certifié Développeur Full Stack",
      duration: "2022-2024",
    },
    {
      institution: "Université des Antilles-Guyane",
      degree: "Licence Éco-gestion Option Informatique",
      duration: "2018-2022",
    },
  ],
};

// Données des compétences
const skills = {
  title: "Mes compétences",
  description:
    "Au fil de mes expériences professionnelles et personnelles, j'ai développé un ensemble de compétences techniques variées. Celles-ci couvrent de nombreuses technologies, tant du côté front-end que back-end.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <SiMysql />, name: "Mysql" },
  ],
};

// Resume component
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "ease" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <TooltipProvider>
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Expérience</TabsTrigger>
              <TabsTrigger value="education">Parcours</TabsTrigger>
              <TabsTrigger value="skills">Compétences</TabsTrigger>
              <TabsTrigger value="about">À propos de moi</TabsTrigger>
            </TabsList>

            {/* Content */}
            <div className="min-h-[70vh] w-full">
              {/* Experience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-8 text-center xl:text-left overflow-hidden">
                  {/* Title */}
                  <h3 className="text-4xl font-bold">{experience.title}</h3>

                  {/* Description */}
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>

                  {/* Scrollable Area */}
                  <ScrollArea className="max-h-[500px] overflow-y-auto">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {experience.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4 transition duration-300 hover:bg-[#2a2a30]">
                          {/* Duration */}
                          <span className="text-accent font-semibold">
                            {item.duration}
                          </span>

                          {/* Position */}
                          <h3 className="text-xl max-w-full lg:max-w-[350px] text-center lg:text-left font-medium">
                            {item.position}
                          </h3>

                          {/* Company */}
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 max-w-full lg:max-w-[350px]">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mt-8">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* About */}
              <TabsContent
                value="about"
                className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {about.description}
                  </p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default Resume;
