/**
 * This component takes in the following props:
 * color: Black Pearl, Blue Planet, Red Planet, Sea Grass, Stealth Green, Sun Soaked
 * interior: dark, white
 * wheel: AeroStealth, SlipStream Black, Vortex
 */
import data from "../assets/configs.json";

function Preview({
  color = "Black Pearl",
  interior = "white",
  wheel = "AeroStealth",
}) {
  const interiorLinks = {
    dark: "/images/interior/dark.jpeg",
    white: "/images/interior/white.jpeg",
  };

  return (
    <div className="sticky top-24">
      {/* Exterior Image */}
      <div className="w-100 rounded overflow-hidden">
        <img
          className="w-full h-auto object-cover scale-125"
          src={data[color].wheels[wheel]}
          alt="Fisker Interior"
        />
      </div>

      {/* Description */}
      <section className="my-5">
        <h3 className="font-bold text-xl text-slate-600">
          {data[color].finish}
        </h3>
        <p className="md:mb-3">{data[color].description}</p>
      </section>

      {/* Interior Image */}
      <div className="w-100 rounded overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          src={interiorLinks[interior]}
          alt="Fisker Interior"
        />
      </div>
      <h3 className="uppercase text-slate-600 pl-1 p-3">Interior View</h3>
    </div>
  );
}

export default Preview;
