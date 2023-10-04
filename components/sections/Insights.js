import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { InsightCard, TitleText, TypingText } from "@/components";

import plant06Img from "@/public/assets/insights/planet-06.png"
import plant07Img from "@/public/assets/insights/planet-07.png"
import plant08Img from "@/public/assets/insights/planet-08.png"

const Insights = () => {
  const insights = [
    {
      imgUrl: plant06Img,
      title: "The launch of the Metaverse makes Elon musk ketar-ketir",
      subtitle:
        "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
    },
    {
      imgUrl: plant07Img,
      title: "7 tips to easily master the madness of the Metaverse",
      subtitle:
        "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
    },
    {
      imgUrl: plant08Img,
      title: "With one platform you can explore the whole world virtually",
      subtitle:
        "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
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
