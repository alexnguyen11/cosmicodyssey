import { motion } from "framer-motion";

import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

import Link from "next/link";
import Image from "next/image";
import coverImg from "@/public/assets/hero/cover.jpeg";
import stampImg from "@/public/assets/hero/stamp.png";

const Main = () => {
  return (
    <div className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[50px] md:text-[90px] sm:text-[60px] text-[44px] lg:leading-[80.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px]  text-white"
          >
            into the
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className="font-bold lg:text-[50px] md:text-[90px] sm:text-[60px] text-[44px] lg:leading-[80.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] text-white">
              infinity.
            </h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] bg-gradient-to-r from-gray-400 to-indigo-900 rounded-tl-[140px] z-[0] -top-[30px]" />

          <Image
            src={coverImg}
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <Link href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <Image
                src={stampImg}
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Main;
