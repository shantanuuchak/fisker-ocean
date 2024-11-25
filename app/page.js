"use client";

/**
 * @description:
 * This page is the home page of the website. It displays the header, preview, and configurator components.
 */
import { useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Configurator from "./components/Configurator";

function Home() {
  const [colorConfigs, setColorConfigs] = useState({
    color: "Red Planet",
    interior: "white",
    wheel: "AeroStealth",
  });

  function handleColorChange(color) {
    setColorConfigs((prevState) => ({
      ...prevState,
      color: color,
    }));
  }

  function handleInteriorChange(interior) {
    setColorConfigs((prevState) => ({
      ...prevState,
      interior: interior,
    }));
  }

  function handleWheelChange(wheel) {
    setColorConfigs((prevState) => ({
      ...prevState,
      wheel: wheel,
    }));
  }

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6">
        <section className="w-full md:w-3/4">
          <Preview {...colorConfigs} />
        </section>
        <aside className="w-full md:w-1/4 pl-0 md:pl-8">
          <Configurator
            {...colorConfigs}
            onColorChange={handleColorChange}
            onInteriorChange={handleInteriorChange}
            onWheelChange={handleWheelChange}
          />
        </aside>
      </main>
    </>
  );
}

export default Home;
