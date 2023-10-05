import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";
import plant01Img from "@/public/assets/explore/planet-01.png";
import plant02Img from "@/public/assets/explore/planet-02.png";
import plant03Img from "@/public/assets/explore/planet-03.png";
import plant04Img from "@/public/assets/explore/planet-04.png";
import plant05Img from "@/public/assets/explore/planet-05.png";

const Explore = () => {
  const [active, setActive] = useState("world-2");

  const exploreWorlds = [
    {
      id: "world-1",
      imgUrl: plant01Img,
      title: "Cosmic Mysteries Unveiled",
    },
    {
      id: "world-2",
      imgUrl: plant02Img,
      title: "Stellar Stories",
    },
    {
      id: "world-3",
      imgUrl: plant03Img,
      title: "Cosmic Time Machine",
    },
    {
      id: "world-4",
      imgUrl: plant04Img,
      title: "Planets, Moons, and Beyond",
    },
    {
      id: "world-5",
      imgUrl: plant05Img,
      title: "Cosmic Odyssey",
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
        <TypingText title="| The Voyage" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the voyage you want <br className="md:block hidden" /> to
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
