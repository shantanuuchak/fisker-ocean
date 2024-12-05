import Image from "next/image";

function Header() {
  return (
    <div className="text-stone-900">
      {/* Header */}
      <div className="bg-stone-100">
        <p className="text-center font-semibold py-2">
          All electric &#xb7; Dynamic &#xb7; Driver Range
        </p>
      </div>
      <header className="flex justify-between px-10 py-3">
        <Image
          src="fisker.svg"
          width={100}
          height={100}
          alt="Fisker Logo"
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-100"
        />
        {/* Region */}
        <a href="#" className="flex gap-2 items-center">
          <Image src="globe.svg" width={20} height={20} alt="Globe Icon" />
          <p className="text-sm sm:text-base">US</p>
        </a>
      </header>
    </div>
  );
}

export default Header;
