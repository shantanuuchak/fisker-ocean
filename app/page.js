"use client";

/**
 * Home page of the website
 * This page contains the Preview, Configurator, and Pricing components
 * State: colorConfigs, pricingConfigs
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

  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row justify-between px-4 md:px-10 py-6">
        <section className="w-full md:w-3/4">
          <Preview {...colorConfigs} />
        </section>
        <aside className="w-full md:w-1/4 pl-0 md:pl-8">
          <Configurator />
        </aside>
      </main>
    </>
  );
}

export default Home;
