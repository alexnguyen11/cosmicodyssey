import { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/styles";
import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";
import plant01Img from "@/public/planet-01.png";
import plant02Img from "@/public/planet-02.png";
import plant03Img from "@/public/planet-03.png";
import plant04Img from "@/public/planet-04.png";
import plant05Img from "@/public/planet-05.png";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  const exploreWorlds = [
    {
      id: "world-1",
      imgUrl: plant01Img,
      title: "The Hogwarts",
    },
    {
      id: "world-2",
      imgUrl: plant02Img,
      title: "The Upside Down",
    },
    {
      id: "world-3",
      imgUrl: plant03Img,
      title: "Kadirojo Permai",
    },
    {
      id: "world-4",
      imgUrl: plant04Img,
      title: "Paradise Island",
    },
    {
      id: "world-5",
      imgUrl: plant05Img,
      title: "Hawkins Labs",
    },
  ];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12" id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
