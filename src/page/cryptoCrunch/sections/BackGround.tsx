import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const BackGround = () => {
  const subDescription =
    "Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below";
  const historyData =
    "Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.";
  return (
    <section className="mx-4 h-screen flex justify-center items-center">
      <div className="space-y-10">
        <div className="text-white space-y-5">
          <h4 className="section-title">We are in a good company</h4>
          <p className="section-description mt-10">{subDescription}</p>
        </div>
        <div className="flex justify-center gap-2">
          <Button className="rounded-full p-2.5 gradientBg cursor-pointer">
            <span>
              <ArrowLeft />
            </span>
          </Button>
          <Button className="rounded-full p-2.5 gradientBg cursor-pointer">
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>

        <p className="text-center text-white md:px-64">{historyData}</p>
        <div className="flex flex-col justify-center items-center space-y-5 text-white">
          <h6 className="font-bold text-lg">John Doe</h6>
          <p className="text-sm flex flex-col md:flex-row gap-2 justify-center items-center">
            Co-founder & CEO of Bithub |{" "}
            <span>
              <img src="/crypto/bitkub.svg" alt="" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
