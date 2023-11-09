import ExploreDetails from "@/components/explore/ExploreDetails";
import { exp3_01, exp3_02, exp3_03 } from "@/public/assets/explore/explore03";

const Explore03 = () => {
  return (
    <div>
      <ExploreDetails title="Cosmic Time Machine" explores={explores} />
    </div>
  );
};

const explores = [
  {
    imgUrl: exp3_01,
    title: "Journey's Dawn",
    content:
      "The Cosmic Time Machine offers a window into the very origins of our universe. It lets us traverse epochs, from the fiery birth of the first stars to the formation of galaxies and beyond. Venturing into its depths, we are transported billions of years back, witnessing firsthand the events that shaped the cosmos. Each sojourn through this time conduit brings revelations about the nature of existence and the ephemeral quality of time itself, making us question the linearity of past, present, and future.",
  },
  {
    imgUrl: exp3_02,
    title: "Dance of the Supermassive",
    content:
      "Within the heart of every galaxy, the Cosmic Time Machine reveals a supermassive black hole, its immense gravity drawing everything into a mesmerizing dance around it. These gravitational behemoths, with masses millions to billions of times that of our sun, have shaped the fate of galaxies for eons. With the Time Machine, we witness their birth, growth, and the powerful influence they exert, from ejecting high-energy jets to instigating the formation of new stars. Their enigmatic nature tantalizes astronomers, and through the Time Machine, we inch closer to understanding their many mysteries.",
  },
  {
    imgUrl: exp3_03,
    title: "Era of Cosmic Inflation",
    content:
      "Before stars and galaxies adorned the universe, a brief but vital epoch occurred: the era of cosmic inflation. The Cosmic Time Machine allows us to venture into this fraction of a second, where the universe expanded at speeds faster than light. This rapid expansion smoothed out the cosmic landscape, setting the stage for galaxies and clusters to form. Delving into this period offers profound insights into the fundamental forces at play, the symmetry breaks, and the conditions that led to the universe we recognize today. It's a pivotal chapter in the grand cosmic narrative.",
  },
];


export default Explore03;
