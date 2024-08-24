"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
// import { TooltipContent } from "@radix-ui/react-tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Tè Kréyôl",
    description:
      "Le projet Tè Kréyôl est une marketplace permettant aux habitants de la Guadeloupe de disposer d'un e-marché adapté à leurs produits recherchés. Cette plateforme vise à faciliter les échanges locaux tout en valorisant les produits du terroir.",
    stack: [{ name: "React" }, { name: "Laravel" }, { name: "Css" }],
    image: "/assets/work/projet1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "API Rick&Morty",
    description:
      "L'API Rick & Morty est un projet d'implémentation de l'API publique de la série animée, permettant de récupérer et d'afficher les personnages, épisodes et lieux de l'univers Rick & Morty. Le projet utilise Next.js et Tailwind CSS pour une interface réactive et moderne.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/R&M.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Kakofor",
    description:
      "Kakofor est un projet basé sur l'architecture MVC en PHP, gérant plusieurs entités comme les apprenants, formateurs, formations, sessions, et directions. Le projet inclut une base de données MySQL pour la gestion des informations et des relations entre ces différentes entités.",
    stack: [{ name: "PHP" }, { name: "Mysql" }],
    image: "/assets/work/kakofor.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Ecomapp",
    description:
      "Ecomapp est un site web de test de type e-commerce, développé en React. Il utilise des composants stylisés via Styled-components pour une meilleure gestion du style, et propose une interface simple pour simuler un site de vente en ligne.",
    stack: [
      { name: "Javascript" },
      { name: "React" },
      { name: "Css 'styled-component'" },
    ],
    image: "/assets/work/ecomapp.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "fullstack",
    title: "Portefolio",
    description:
      "Le projet Portefolio est un site web personnel conçu pour présenter mes projets et compétences. Développé en Next.js et Tailwind CSS, ce portefolio offre une vitrine interactive et moderne de mes réalisations dans le domaine du développement web.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/portefolio.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto relative">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] relative z-10">
          {/* Left Column */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none relative z-20">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-transparent text-outline leading-none relative z-30">
                {project.num}
              </div>
              {/* Project Category */}
              {/* <h2 className="text-[42px] font-bold text-white capitalize leading-none group-hover:text-accent transition-all duration-500">
                {project.category} project
              </h2> */}
              {/* Project Title */}
              <h2 className="text-[42px] font-bold text-white capitalize leading-none group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              {/* Project Description */}
              <p className="text-white/60 mt-4">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl  group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* Swiper Section */}
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
