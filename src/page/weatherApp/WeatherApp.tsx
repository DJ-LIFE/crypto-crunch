import { Header } from "./sections/Header";
import { WeatherHero } from "./sections/WeatherHero";

export const WeatherApp = () => {
  return (
    <div className="font-inter bg-black overflow-x-hidden">
      <div className="container mx-auto max-w-7xl">
        <Header />
        <WeatherHero />
      </div>
    </div>
  );
};
