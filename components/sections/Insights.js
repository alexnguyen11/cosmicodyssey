import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { InsightCard, TitleText, TypingText } from "@/components";

import plant06Img from "@/public/assets/insights/planet-06.png";
import plant07Img from "@/public/assets/insights/planet-07.png";
import plant08Img from "@/public/assets/insights/planet-08.png";

const Insights = () => {
  const insights = [
    {
      imgUrl: plant06Img,
      title: "The Humbling Perspective",
      subtitle:
        "The cosmos humbles us with its vastness, reminding us of our small place in the universe and the need to care for our home planet.",
    },
    {
      imgUrl: plant07Img,
      title: "A Tapestry of Science and Wonder",
      subtitle:
        "The cosmos is a canvas for scientific exploration, offering insights into the laws of physics, the origins of the universe, and inspiring both curiosity and innovation.",
    },
    {
      imgUrl: plant08Img,
      title: "Cosmic Dreams and Human Potential",
      subtitle:
        "The cosmos fuels our dreams of exploring distant worlds, pushing the boundaries of technology and human potential, and challenging us to reach for the stars in our pursuit of knowledge and discovery.",
    },
  ];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Insight" textStyles="text-center" />
        <TitleText
          title={<>Insight about metaverse</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Insights;
