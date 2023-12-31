import { motion } from "framer-motion";

import { footerVariants } from "@/utils/motion";

import Image from "next/image";
import twitterImg from "@/public/assets/footer/twitter.svg";
import linkedinImg from "@/public/assets/footer/linkedin.svg";
import instagramImg from "@/public/assets/footer/instagram.svg";
import facebookImg from "@/public/assets/footer/twitter.svg";
import headsetImg from "@/public/assets/footer/headset.svg";

const Footer = () => {
  const socials = [
    {
      name: "twitter",
      url: twitterImg,
    },
    {
      name: "linkedin",
      url: linkedinImg,
    },
    {
      name: "instagram",
      url: instagramImg,
    },
    {
      name: "facebook",
      url: facebookImg,
    },
  ];

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
      id="contact"
    >
      <div className="footer-gradient" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Discover the Cosmos
          </h4>
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <Image
              src={headsetImg}
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              About Cosmos
            </span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              Cosmic Odyssey
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Cosmic Odyssey. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
