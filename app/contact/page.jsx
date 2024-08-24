"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { SelectTrigger } from "@radix-ui/react-select";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    description: "(+33) 695 30 57 73",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "laurent.mordier.pro@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Adresse",
    description: "Rue Guyemer, Villiers-le-bel 95400",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl-order-1">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                N'hésitez pas à me contacter ! Je suis motivé, curieux et
                dynamique, et je suis actuellement à la recherche d'une
                alternance. Je suis très enthousiaste à l'idée d'apprendre de
                nouvelles compétences et de participer à des projets qui me
                permettront de grandir professionnellement.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Prénom" />
                <Input type="text" placeholder="Nom" />
                <Input type="email" placeholder="Email" />
                <Input type="telephone" placeholder="Numéro de téléphone" />
              </div>
              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choisissez un service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    <SelectItem value="web">Développement Web</SelectItem>
                    <SelectItem value="mobile">Développement Mobile</SelectItem>
                    <SelectItem value="design">Design UI/UX</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select> */}

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Écrivez votre message."
              />
              {/* submit button */}
              <Button
                className="w-full bg-accent hover:bg-accent-hover text-white py-3 rounded-lg transition-all duration-300"
                size="md">
                Envoyer un message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex flex-col items-start xl:justify-end order-1 xl:order-2 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
