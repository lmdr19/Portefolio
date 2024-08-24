"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Années d'expérience",
  },
  {
    num: 6,
    text: "Projets réalisés",
  },
  {
    num: 9,
    text: "Technologies maîtrisées",
  },
  //   {
  //     num: 500,
  //     text: "Commits de code",
  //   },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-center gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 gap-4 items-center xl:justify-start">
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="text-lg leading-snug text-white/80">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
