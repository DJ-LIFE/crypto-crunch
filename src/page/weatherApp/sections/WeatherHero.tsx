import { BackgroundLines } from "@/components/ui/background-lines";
import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

export const WeatherHero = () => {
  interface WeatherData {
    current: {
      temperature: number;
      weather_descriptions: string[];
      feelslike: number;
      humidity: number;
      wind_speed: number;
    };
  }

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async () => {
    const options = {
      method: "GET",
      url: "https://api.weatherstack.com/current?access_key=62fe2aac9a1f62b1d8f91d3776b6b663",
      params: {
        query: "New Delhi",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const data = await fetchWeatherData();
        console.log(data);
        setWeatherData(data);
      };

      getData();
    }, 1000);
  }, []);

  console.log(weatherData?.current.temperature, "weatherData Temperature");

  return (
    <section className="h-screen">
      <BackgroundLines className="bg-black flex flex-col justify-center items-center pt-40">
        <h1 className="text-6xl font-semibold text-white">{weatherData?.current.temperature}°C</h1>
        <p className="text-white mt-10 text-sm font-medium">
          Mostly Clear | feels like {weatherData?.current.feelslike}°
        </p>
      </BackgroundLines>
      <Card className="mx-4 flex justify-center items-center bg-transparent backdrop-blur-2xl border-none mt-10">
        <h4 className="text-white textlg font-medium">Weather Details</h4>
        <ul className="h-20 overflow-scroll">
          {weatherData?.current &&
            Object.entries(weatherData.current).map(([key, value]) => {
              if (key === "weather_icons") return null;

              return (
                <li key={key}>
                  <span className="text-white">{key}</span>: <span className="text-white">{value}</span>
                </li>
              );
            })}
        </ul>
      </Card>
    </section>
  );
};
