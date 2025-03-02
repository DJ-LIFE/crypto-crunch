import { About } from "./sections/About";
import { BackGround } from "./sections/BackGround";
import Contact from "./sections/Contact";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";
import { Partners } from "./sections/Partners";
import { Team } from "./sections/Team";

export const Cryptocrunch = () => {
  return (
    <div className="font-inter bg-black overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <Hero />
        <About />
        <Features />
        <Partners />
        <BackGround />
        <Team />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};
