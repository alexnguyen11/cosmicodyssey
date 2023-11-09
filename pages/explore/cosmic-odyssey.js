import ExploreDetails from "@/components/explore/ExploreDetails";
import { exp5_01, exp5_02, exp5_03 } from "@/public/assets/explore/explore05";

const Explore05 = () => {
  return (
    <div>
      <ExploreDetails title="Cosmic Odyssey" explores={explores} />
    </div>
  );
};

const explores = [
  {
    imgUrl: exp5_01,
    title: "Embarking on the Odyssey",
    content:
      "The Cosmic Odyssey begins at the very precipice of understanding, where the known and the unknown converge. Embarking on this journey, we soar beyond the confines of our pale blue dot, delving into the vastness of the universe. The interstellar voids, illuminated by distant suns, paint tales of cosmic grandeur and profundity. With every light-year traveled, we are beckoned deeper into the heart of the cosmos, each revelation broadening our perspective and challenging preconceived notions of existence and reality.",
  },
  {
    imgUrl: exp5_02,
    title: "Navigating Cosmic Phenomena",
    content:
      "As we traverse the expanse, the Cosmic Odyssey introduces us to astonishing phenomena: supernovae that outshine entire galaxies, neutron stars with unfathomable densities, and the enigmatic pull of black holes, where time itself seems to cease. These cosmic wonders, while awe-inspiring, also hold clues to the universe's intricate workings. By studying them, we glean insights into the life cycles of stars, the formation of elements, and the very fabric of spacetime. Every observation, every recorded pulsar beat, adds a new verse to the cosmic symphony.",
  },
  {
    imgUrl: exp5_03,
    title: "Beyond the Observable Horizon",
    content:
      "The ultimate leg of the Cosmic Odyssey takes us to the edges of the observable universe and, perhaps, even beyond. Here, in the realm of the almost incomprehensible, we grapple with concepts like multiverses, higher dimensions, and realms of existence beyond our current understanding. It's a journey into the theoretical, where physics, philosophy, and imagination intermingle. Pushing these boundaries, we not only seek to understand the universe's vastness but also our humble place within it, forever curious and forever exploring.",
  },
];

export default Explore05;
