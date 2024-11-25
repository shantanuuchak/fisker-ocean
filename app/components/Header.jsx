import { IconWorld } from "@tabler/icons-react";

function Header() {
  return (
    <div className="text-stone-900">
      <div className="bg-gray-100">
        <p className="text-sm sm:text-base text-center py-2 font-semibold">
          Credits to MKBDH for bankrupting the company
        </p>
      </div>
      <header className="flex justify-between items-center px-8 sm:px-10 py-3 sm:py-6">
        <img
          src="src/assets/fisker.svg"
          alt="fisker"
          className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-all duration-300"
        />

        <a href="#" className="flex items-center gap-1 ">
          <IconWorld /> <span className="text-sm sm:text-base">US</span>
        </a>
      </header>
    </div>
  );
}

export default Header;
