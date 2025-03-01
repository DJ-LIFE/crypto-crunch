import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ArrowRight, Ghost } from "lucide-react";

export const Features = () => {
  const sectionData =
    "We are a global crypto liquidity provider and algorithmic market maker. We trade digital assets listed on Centralized Exchanges in over 15 countries worldwide.";
  return (
    <section className="mt-10 relative">
      <div className="mx-4">
        <h2 className="section-title text-white">Crypto Market Making</h2>
        <p className="section-description mt-20">{sectionData}</p>
      </div>
      <div className="mt-20 mx-4">
        {featureData.map((feature) => (
          <div
            key={feature.id}
            className={clsx(
              "flex flex-col justify-between md:flex-row  items-center gap-4 mt-20",
              feature.id === 2 && "md:flex-row-reverse",
            )}
          >
            <div className={clsx("text-white space-y-4 my-5 z-10", feature.id === 1 ? "md:pr-56" : "md:pl-56")}>
              <h3 className="text-4xl font-medium">{feature.title}</h3>
              <h5 className="text-xl font-medium">{feature.subTitle}</h5>
              <p className="text-wrap">{feature.data}</p>
              <Button className="cursor-pointer hover-gradientBg hover:text-white bg-transparent">
                Learn More{" "}
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </div>
            <div className="w-1/2 z-10">
              <img src={feature.image} alt={feature.alt} />
            </div>
          </div>
        ))}
      </div>
      <span className="absolute -bottom-26 -left-40 h-200 w-180 rounded-full shadow-2xl blur-3xl bg-[#665DCD]/70" />
      <span className="absolute -bottom-16 -left-40 h-40 w-40 rounded-full shadow-2xl blur-3xl bg-[#D2AB67]/70 " />
    </section>
  );
};

const featureData = [
  {
    id: 1,
    title: "Market Making For Cryoto Assets",
    subTitle: "Accelerate your token’s journey by boosting its liquidity",
    data: "We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services, industry expertise and network.",
    image: "/crypto/cryptoProject.svg",
    alt: "Market Making For Cryoto Assets",
  },
  {
    id: 2,
    title: "Market Making for Crypto Exchanges",
    subTitle: "Attract more traders and projects with deep order books & liquidity",
    data: "Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.",
    image: "/crypto/cryptoDashboard.svg",
    alt: "Market Making for Crypto Exchanges",
  },
];
