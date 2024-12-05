function Configurator({ color, interior, wheel, updateOptions }) {
  console.log(color, interior, wheel);
  const exteriorSwatch = [
    {
      id: 0,
      name: "Sun Soaked",
      src: "/swatch/sun_soaked.png",
    },
    {
      id: 1,
      name: "Sea Grass",
      src: "/swatch/sea_grass.png",
    },
    {
      id: 2,
      name: "Black Pearl",
      src: "/swatch/black_pearl.png",
    },
    {
      id: 3,
      name: "Red Planet",
      src: "/swatch/red_planet.png",
    },
    {
      id: 4,
      name: "Stealth Green",
      src: "/swatch/stealth_green.png",
    },
    {
      id: 5,
      name: "Blue Planet",
      src: "/swatch/blue_planet.png",
    },
  ];

  const interiorSwatch = [
    {
      id: 0,
      name: "dark",
      src: "/swatch/interior/dark.png",
    },
    {
      id: 1,
      name: "white",
      src: "/swatch/interior/light.png",
    },
  ];

  const wheelsOptions = [
    {
      id: 0,
      name: "AeroStealth",
      src: "/wheels/aerostealth.webp",
    },
    {
      id: 1,
      name: "SlipStream Black",
      src: "/wheels/slipstream_black.webp",
    },
    {
      id: 2,
      name: "Vortex",
      src: "/wheels/vortex.webp",
    },
  ];

  return (
    <div>
      {/* Headings */}
      <h1 className="text-2xl md:text-4xl font-semibold text-blue-950">
        Fisker Ocean
      </h1>
      <p className="py-2 text-xl">
        Configure your very own, with the options to choose from 6 exterior, 2
        interior and 3 wheels options.
      </p>

      {/* Exterior Colors */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Exterior Color</h3>
        <div className="flex gap-2">
          {exteriorSwatch.map((colorObj) => (
            <button
              key={colorObj.id}
              onClick={() => updateOptions("color", colorObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                color === colorObj.name
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <img src={colorObj.src} alt="Black Pearl" className="w-12" />
            </button>
          ))}
        </div>
      </div>

      {/* Interior Colors */}
      <div className="my-12">
        <h3 className="font-bold uppercase mb-3">Interior Color</h3>
        <div className="flex gap-2">
          {interiorSwatch.map((colorObj) => (
            <button
              key={colorObj.id}
              onClick={() => updateOptions("interior", colorObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                colorObj.name === interior
                  ? "border-2 border-blue-300 rounded-full"
                  : ""
              }`}
            >
              <img src={colorObj.src} alt="Black Pearl" className="w-14" />
            </button>
          ))}
        </div>
      </div>

      {/* Wheel Options */}
      <div className="my-3">
        <h3 className="font-bold uppercase mb-3">Wheel Options</h3>
        <div className="flex gap-2">
          {wheelsOptions.map((wheelObj) => (
            <button
              key={wheelObj.id}
              onClick={() => updateOptions("wheel", wheelObj.name)}
              className={`hover:scale-105 transition-transform duration-100  ${
                wheelObj.name === wheel ? "border-2 border-blue-300" : ""
              }`}
            >
              <img src={wheelObj.src} alt="Black Pearl" className="w-16" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Configurator;
