import Image from "next/image";
import configs from "@/app/assets/configs.json";

// @desc Preview component
// @param {string} color: Sun Soaked/Sea Grass/Black Pearl/Red Planet/Stealth Green/Blue Planet
// @param {string} interior: dark/white
// @param {string} wheel: AeroStealth/SlipStream Black/Vortex
function Preview({
  color = "Black Pearl",
  interior = "white",
  wheel = "Vortex",
}) {
  console.log(`images/interior/${interior}.jpeg`);
  return (
    <>
      {/* Exterior Image */}
      <Image
        src={configs[color].wheels[wheel]}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      {/* Description */}
      <div className="py-3">
        <h3 className="font-bold text-xl text-blue-950">
          {configs[color].finish}
        </h3>
        <p>{configs[color].description}</p>
      </div>

      {/* Interior Image */}
      <Image
        src={`/images/interior/${interior}.jpeg`}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto rounded-lg"
        alt="Aerostealth"
      />
      <p className="uppercase font-semibold text-blue-950 py-3">
        Interior Image
      </p>
    </>
  );
}

export default Preview;
