import homeImg from "../src/assets/images/home.jpg";
import inasalImg from "../src/assets/images/inasal.png";
import theBoisImg from "../src/assets/images/thebois.webp";
import beeImg from "../src/assets/images/deseretBee.jpg";

interface PageData {
  image: string;
  title: string;
  description: string;
  whatIs?: string;
}

export const PAGES: Record<string, PageData> = {
  Home: {
    image: homeImg,
    title: "Home",
    description: "This is the Home description",
  },
  Baybayin: {
    image: inasalImg,
    title: "Baybayin",
    whatIs: "What is Baybayin?",
    description: "This is the Baybayin description",
  },
  Aurebesh: {
    image: theBoisImg,
    title: "Aurebesh",
    whatIs: "What is Aurebesh?",
    description: "This is the Aurebesh description",
  },
  Deseret: {
    image: beeImg,
    title: "Deseret",
    whatIs: "What is Deseret?",
    description: "This is the Deseret description",
  },
};
