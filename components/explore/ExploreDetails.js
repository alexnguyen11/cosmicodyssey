import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "@/utils/motion";
import ContentCard from "@/components/explore/ContentCard";

const ExploreDetails = ({title, explores }) => {
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <motion.h1
          variants={textVariant(1.1)}
          className="flex justify-center items-center text-white sm:text-[40px] text-[30px] font-semibold tracking-wider sm:py-16 xs:py-8 py-12"
        >
          {title}
        </motion.h1>
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {explores.map((item, index) => (
            <ContentCard
              key={`explores-${index}`}
              {...item}
              index={index + 1}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreDetails;
