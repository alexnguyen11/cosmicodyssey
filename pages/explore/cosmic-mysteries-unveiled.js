import { motion } from "framer-motion";

import { fadeIn } from "@/utils/motion";

const Explore01 = () => {
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12">
      <h1 className="flex justify-center items-center text-white sm:text-[40px] text-[30px] font-semibold tracking-wider sm:py-16 xs:py-8 py-12">
        Cosmic Mysteries Unveiled
      </h1>
      <div className="sm:text-[20px] text-[12px] text-gray-300 tracking-wide font-medium">
        <motion.div variants={fadeIn("right", "spring")}>
          <p className="sm:leading-7 leading-5 py-4">
            In the grand theater of the universe, cosmic mysteries loom large,
            beckoning us to delve deeper into their enigmatic depths. The story
            begins with the resounding echoes of the Big Bang, the cataclysmic
            event that birthed our cosmos nearly 13.8 billion years ago. Yet,
            the precise conditions of this explosive genesis and what came
            before it remain shrouded in mystery. The quest to understand the
            Big Bang's origins and implications takes us on an intellectual
            journey of cosmic proportions. As we peel back the layers of time,
            we begin to unravel the intricate tapestry of the universe's
            beginnings, a narrative that challenges our understanding of space,
            time, and matter.
          </p>
        </motion.div>
        <motion.div>
          {" "}
          <p className="sm:leading-7 leading-5 py-4">
            One of the most tantalizing cosmic enigmas is the presence of dark
            matter, an elusive and invisible substance that comprises a
            significant portion of the universe's mass. Unlike ordinary matter,
            dark matter does not emit, absorb, or reflect light, rendering it
            undetectable by conventional means. Its existence is inferred
            primarily from its gravitational influence on galaxies and galactic
            structures. The nature and composition of dark matter remain a
            tantalizing puzzle, driving physicists to develop innovative
            experiments and theories to decipher its secrets.
          </p>
        </motion.div>
        <motion.div>
          {" "}
          <p className="sm:leading-7 leading-5 py-4">
            Further deepening the cosmic intrigue is dark energy, a mysterious
            force responsible for the universe's accelerated expansion. Dark
            energy's existence was discovered relatively recently, and its
            nature remains elusive. It defies our traditional understanding of
            energy and matter, as it seems to permeate the fabric of space
            itself, pushing galaxies apart at an ever-increasing rate.
            Unraveling the enigma of dark energy is one of the most pressing
            challenges in cosmology, with implications for the ultimate fate of
            the universe. As we continue to unveil these cosmic mysteries, we
            find ourselves on a captivating journey into the unknown, seeking to
            unlock the deepest secrets of the cosmos.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore01;
