import { BsBell } from "react-icons/bs";
import { Menu } from "@/components";

const Navbar = () => {
  return (
    <header className="fixed z-50 w-full bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <div className="flex items-center gap-x-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-300"
          >
            <span className="sr-only">View notifications</span>
            <BsBell className="h-6 w-6" aria-hidden="true" />
          </button>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
