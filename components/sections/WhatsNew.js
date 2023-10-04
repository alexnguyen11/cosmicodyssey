import { motion } from "framer-motion";

import { NewFeatures, TitleText, TypingText } from "@/components";
import { planetVariants, staggerContainer, fadeIn } from "@/utils/motion";

import Image from "next/image";
import whatsnewImg from "@/public/assets/whatsnew/whats-new.png";
import headsetImg from "@/public/assets/whatsnew/headset.svg";
import vrpanoImg from "@/public/assets/whatsnew/vrpano.svg";

const WhatsNew = () => {
  const newFeatures = [
    {
      imgUrl: headsetImg,
      title: "A new world",
      subtitle:
        "we have the latest update with new world for you to try never mind",
    },
    {
      imgUrl: vrpanoImg,
      title: "More realistic",
      subtitle:
        "In the latest update, your eyes are narrow, making the world more realistic than ever",
    },
  ];

  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.95] flex justify-center flex-col"
        >
          <TypingText title="| Whats new?" />
          <TitleText title={<>What's new about Metaversus?</>} />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src={whatsnewImg}
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;