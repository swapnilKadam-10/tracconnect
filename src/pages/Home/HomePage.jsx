import { useRef } from "react";
import { useTitle } from "../../hooks/useTitle";
import { HeroSection } from "./components/HeroSection";
import { ServiceSection } from "./components/ServiceSection";
import { Testomonials } from "./components/Testomonials";

export const HomePage = () => {
  useTitle("Home");

  return (
    <main>
      <HeroSection />
      <section
        id="services"
        className="text-center m-auto justify-center my-10"
      >
        <ServiceSection />
      </section>

      <Testomonials />
    </main>
  );
};
