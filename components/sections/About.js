import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { TypingText } from "../CustomTexts";

import Image from "next/image";
import arrowdownImg from "@/public/assets/about/arrow-down.svg";

const About = () => (
  <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
    >
      <TypingText title="| About The Cosmos" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Cosmos</span> is the
        boundless expanse of the universe, comprising galaxies, stars, planets,
        and the fundamental forces of nature.{" "}
        <span className="font-extrabold text-white">Cosmology</span> the study
        of the cosmos, delves into the universe's origins, evolution, and
        mysteries, from the Big Bang to dark matter and dark energy. Let's{" "}
        <span className="font-extrabold text-white">explore</span> the enigmas
        of the cosmos and embarking on an awe-inspiring journey through space
        and time.
      </motion.p>

      <motion.div variants={fadeIn("up", "tween", 0.3, 1)}>
        <Image
          src={arrowdownImg}
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
