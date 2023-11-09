import ExploreDetails from "@/components/explore/ExploreDetails";
import { exp2_01, exp2_02, exp2_03 } from "@/public/assets/explore/explore02";
import img01 from "@/public/assets/explore/topica_01.jpeg";

const Explore02 = () => {
  return (
    <div>
      <ExploreDetails title="Stella Stories" explores={explores} />
    </div>
  );
};

const explores = [
  {
    imgUrl: exp2_01,
    title: "The Birth of Stella",
    content:
      "In the heart of the cosmos, where nebulas twinkle and stars dance, was born a celestial being named Stella. Unlike the static stars that merely shone and pulsated, Stella had a consciousness. She was formed from a unique blend of cosmic dust and interstellar magic. Her luminescence was different, for every time she radiated light, a new story of the universe unfurled. Some tales were of galaxies colliding, and others of the silent songs black holes sang. Stella's purpose became clear – she was the universe's storyteller. ",
  },
  {
    imgUrl: exp2_02,
    title: "Stella's Cosmic Voyage",
    content:
      "Every night, Stella journeyed across the vast expanse of space to witness the evolving tales of the cosmos. She ventured into the fiery cores of stars and delved into the mysterious realms of dark matter. With every story she uncovered, her brightness intensified. As she traveled, she left behind a shimmering trail of stardust, which many on Earth mistook for shooting stars. Those who looked closely, however, could see the myriad tales twirling and whirling in the stardust. The universe was teeming with stories, and Stella was eager to share them.",
  },
  {
    imgUrl: exp2_03,
    title: "Whispers to Earth",
    content:
      "Although Stella was a cosmic entity, she felt a special connection to Earth. She was particularly intrigued by the humans who gazed up at her with wonder in their eyes. Every night, she chose a few tales and whispered them into the dreams of dreamers, poets, and visionaries. Many of the greatest cosmic myths and legends that have been told were inspired by Stella's whispers. They served as a reminder that while the universe might seem vast and indifferent, it is also full of stories, waiting to be discovered and cherished.",
  },
];

export default Explore02;
