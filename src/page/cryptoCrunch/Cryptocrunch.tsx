import { About } from "./sections/About";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import Header from "./sections/Header";
import { Hero } from "./sections/Hero";

export const Cryptocrunch = () => {
  return (
    <div className="font-inter bg-black">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <Hero />
        <About />
        <Features />
        <Footer />
      </div>
    </div>
  );
};
