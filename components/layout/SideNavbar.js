import { Close } from "@mui/icons-material";
import Link from "next/link";

const SideNavbar = ({ nav, handleNav }) => {
  return (
    <div
      className={
        nav
          ? "fixed right-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen p-10 ease-in duration-500 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-10 z-50"
          : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
      }
    >
      <div className="mb-12 flex items-center justify-between text-white">
        <div onClick={handleNav} className="cursor-pointer text-white">
          <Close />
        </div>
        <Link href="/">
          <h2 className="font-extrabold text-[0.7rem] md:text-[24px] leading-[30.24px] text-white">
            COSMIC ODYSSEY
          </h2>
        </Link>
      </div>
      <div className="py-4 flex flex-col text-center justify-center text-white">
        <ul className="uppercase">
          <Link href="/">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              About
            </li>
          </Link>
          <Link href="/#explore">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              Explore
            </li>
          </Link>
          <Link href="/#facts">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              Facts
            </li>
          </Link>
          <Link href="/#insight">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              Insight
            </li>
          </Link>
          <Link href="/#contact">
            <li className="py-4 text-sm cursor-pointer hover:underline">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
