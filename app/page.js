"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

// Composants
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}>
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Texte */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              {/* <span>Développeur Junior</span> */}
              <h2 className="h2"> Bonjour, je suis</h2>
              <h1 className="h1">
                <span className="text-accent">Laurent Mordier</span>
              </h1>
              <p className="max-w-[500px] mt-8 mb-9 text-white/80">
                Je suis un développeur débutant passionné par l'apprentissage et
                l'amélioration de mes compétences en développement. J'aspire à
                maîtriser diverses technologies et langages de programmation.
              </p>

              {/* {Bouton et réseaux sociaux} */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/cv.pdf"; // Chemin vers le fichier CV
                    link.download = "Laurent_Mordier_CV.pdf"; // Nom du fichier à télécharger
                    link.click(); // Simuler un clic pour télécharger le fichier
                  }}
                  className="uppercase flex items-center gap-2 ">
                  <span>Télécharger mon CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0"></div>
                <div>
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border 
                  border-accent rounded-full flex flex justify-center
                   items-center text-accent text-base hover:bg-accent 
                   hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </motion.div>
    </section>
  );
};

export default Home;
