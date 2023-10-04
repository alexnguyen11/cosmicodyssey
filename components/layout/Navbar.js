import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import Image from "next/image";
import searchImg from "@/public/assets/navbar/search.svg";
import menuImg from "@/public/assets/navbar/menu.svg";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className='sm:px-16 px-6 py-8 relative'
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Image
          src={searchImg}
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          COSMOS ODYSSEY
        </h2>
        <Image
          src={menuImg}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Navbar;
