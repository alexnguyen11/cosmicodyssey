import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

import Image from "next/image";

const ContentCard = ({ imgUrl, title, content, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 1)}
      className="flex md:flex-row flex-col gap-20 md:py-10"
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex-1  flex flex-col ">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
            {title}
          </h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
            {content}
          </p>
        </div>
      </div>
      <Image
        src={imgUrl}
        alt={title}
        className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
      />
    </motion.div>
  );
};

export default ContentCard;
