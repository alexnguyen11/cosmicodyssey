import ExploreDetails from "@/components/explore/ExploreDetails";
import { exp1_01, exp1_02, exp1_03 } from "@/public/assets/explore/explore01";

const Explore01 = () => {

  return (
    <div>
      <ExploreDetails title="Cosmic Mysteries Unveiled" explores={explores} />
    </div>
  );
};

const explores = [
  {
    imgUrl: exp1_01,
    title: "The Humbling Perspective",
    content:
      "In the grand theater of the universe, cosmic mysteries loom large, beckoning us to delve deeper into their enigmatic depths. The story begins with the resounding echoes of the Big Bang, the cataclysmic event that birthed our cosmos nearly 13.8 billion years ago. Yet, the precise conditions of this explosive genesis and what came before it remain shrouded in mystery. The quest to understand the Big Bang's origins and implications takes us on an intellectual journey of cosmic proportions. As we peel back the layers of time, we begin to unravel the intricate tapestry of the universe's beginnings, a narrative that challenges our understanding of space, time, and matter.",
  },
  {
    imgUrl: exp1_02,
    title: "The Humbling Perspective",
    content:
      "One of the most tantalizing cosmic enigmas is the presence of dark matter, an elusive and invisible substance that comprises a significant portion of the universe's mass. Unlike ordinary matter, dark matter does not emit, absorb, or reflect light, rendering it undetectable by conventional means. Its existence is inferred primarily from its gravitational influence on galaxies and galactic structures. The nature and composition of dark matter remain a tantalizing puzzle, driving physicists to develop innovative experiments and theories to decipher its secrets.",
  },
  {
    imgUrl: exp1_03,
    title: "The Humbling Perspective",
    content:
      "One of the most tantalizing cosmic enigmas is the presence of dark matter, an elusive and invisible substance that comprises a significant portion of the universe's mass. Unlike ordinary matter, dark matter does not emit, absorb, or reflect light, rendering it undetectable by conventional means. Its existence is inferred primarily from its gravitational influence on galaxies and galactic structures. The nature and composition of dark matter remain a tantalizing puzzle, driving physicists to develop innovative experiments and theories to decipher its secrets.",
  },
];

export default Explore01;
