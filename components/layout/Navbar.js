import { motion } from "framer-motion";
import styles from "@/styles";
import { navVariants } from "@/utils/motion";
import Image from "next/image";
import searchImg from "@/public/assets/navbar/search.svg";
import menuImg from "@/public/assets/navbar/menu.svg";
import Link from "next/link";
import { useState } from "react";
import SideNavbar from "./SideNavbar";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="sticky top-0 sm:px-16 px-6 py-8 z-50"
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
        <Link href="/">
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            COSMIC ODYSSEY
          </h2>
        </Link>

        <Link href="https://github.com/alexnguyen11">
          {" "}
          <GitHubIcon className="text-[24px] text-white object-contain cursor-pointer" />
        </Link>

        <Image
          src={menuImg}
          alt="menu"
          className="md:hidden w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={handleNav}
        />
      </div>
      <SideNavbar nav={nav} handleNav={handleNav} />
    </motion.nav>
  );
};

export default Navbar;
