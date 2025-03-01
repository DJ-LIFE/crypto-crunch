import { Button } from "@/components/ui/button";

export const Hero = () => {
  const heroDetail =
    "Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 170+ crypto assets across 25+ centralized spot and derivative crypto exchanges.";
  return (
    <section className="flex flex-col justify-center items-center py-20">
      <div className="lg:mt-20">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-medium p-2 text-center mb-10 space-y-10">
          <span>Balancing</span> <br />
          <span>Crypto Markets</span>
        </h1>
        <p className="text-white text-lg text-center px-4 md:px-20 lg:px-40 leading-6.5 py-10">{heroDetail}</p>
      </div>
      <Button className="mt-10 mb-36 gradientBg text-sm shadow-md rounded-sm p-6 font-bold cursor-pointer">GET IN TOUCH</Button>
    </section>
  );
};
