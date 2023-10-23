import ExploreDetails from "@/components/explore/ExploreDetails";
import img01 from "@/public/assets/explore/topica_01.jpeg";

const Explore04 = () => {
  return (
    <div>
      <ExploreDetails title="Planets, Moon and Beyond" explores={explores} />
    </div>
  );
};

const explores = [
  {
    imgUrl: img01,
    title: "Realm of the Planets",
    content:
      "The celestial dance of the planets within our solar system offers a spectacle of wonders. Each planet, from the scorching Mercury to the icy rings of Saturn and the distant Neptune, tells its own story of formation, evolution, and resilience. Volcanic eruptions, monstrous storms, and mesmerizing color palettes are just a few of the marvels these planetary bodies offer. As we voyage through their terrains, we learn more about their unique geologies, atmospheres, and potential for harboring life, broadening our understanding of planetary science and our place within the solar system.",
  },
  {
    imgUrl: img01,
    title: "Mysteries of the Moon",
    content:
      "Our closest celestial neighbor, the Moon, has been a beacon of wonder for eons. Its phases have inspired myths, guided navigators, and influenced Earth's tides. Delving into its craters, plains, and mountains, we uncover tales of cosmic bombardment and ancient volcanic activity. The Moon's desolate beauty and its secrets, such as water ice hidden in its shadowed craters, hold the potential for future lunar habitats and deep space exploration. Each lunar exploration teaches us not only about the Moon's history but also sheds light on Earth's early days and the intricate dance of celestial bodies.",
  },
  {
    imgUrl: img01,
    title: "Venturing Beyond",
    content:
      "Beyond the familiar planets and our Moon lies the vast expanse of the cosmos, teeming with mysteries waiting to be unraveled. From the icy dwarf planets and the Kuiper Belt objects at the edge of our solar system to interstellar visitors and the vastness of the Oort Cloud, the universe beckons with tales of the unknown. As we journey through this boundless frontier, we encounter phenomena that challenge our understanding: rogue planets drifting without a star, comets with tales of distant worlds, and the enigmatic pull of dark matter. Each discovery is a testament to the universe's ever-evolving narrative and our ceaseless quest to explore.",
  },
];

export default Explore04;
