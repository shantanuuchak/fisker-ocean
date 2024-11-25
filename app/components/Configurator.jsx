function Configurator() {
  const colorSwatch = [
    {
      id: 0,
      name: "Black Pearl",
      source: "/swatch/black_pearl.png",
    },
    {
      id: 1,
      name: "Blue Planet",
      source: "/swatch/blue_planet.png",
    },
    {
      id: 2,
      name: "Red Planet",
      source: "/swatch/red_planet.png",
    },
    {
      id: 3,
      name: "Sea Grass",
      source: "/swatch/sea_grass.png",
    },
    {
      id: 4,
      name: "Stealth Green",
      source: "/swatch/stealth_green.png",
    },
    {
      id: 5,
      name: "Sun Soaked",
      source: "/swatch/sun_soaked.png",
    },
  ];

  const interiorSwatch = [
    {
      id: 0,
      name: "Dark",
      source: "/swatch/interior/dark.png",
    },
    {
      id: 1,
      name: "Light",
      source: "/swatch/interior/light.png",
    },
  ];

  const wheels = [
    {
      id: 0,
      name: "AeroStealth",
      source: "/wheels/aerostealth.webp",
    },
    {
      id: 1,
      name: "SlipStream Black",
      source: "/wheels/slipstream_black.webp",
    },
    {
      id: 2,
      name: "Vortex",
      source: "/wheels/vortex.webp",
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-5">Ocean</h1>
      <h2 className="text-xl text-center font-light">Customize Your Car</h2>

      {/* Color Swatch */}
      <div className="my-8">
        <h3 className="font-semibold mb-2">Exterior Color</h3>
        <div className="flex space-x-4">
          {colorSwatch.map((exterior) => (
            <button
              key={exterior.id}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img src={exterior.source} alt="Color Swatch" className="w-22" />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Swatch */}
      <div className="my-8">
        <h3 className="font-semibold mb-2">Interior Color</h3>
        <div className="flex space-x-4">
          {interiorSwatch.map((interior) => (
            <button
              key={interior.id}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img src={interior.source} alt="Dark" className="w-12" />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel */}
      <div className="my-8">
        <h3 className="font-semibold mb-2">Interior Color</h3>
        <div className="flex space-x-4">
          {wheels.map((wheel) => (
            <button
              key={wheel.id}
              className="transition-transform duration-300 hover:scale-110 border-2"
            >
              <img src={wheel.source} alt="Dark" className="w-12" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
