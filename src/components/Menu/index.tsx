import { Fragment } from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { Popover, Transition } from "@headlessui/react";

import Items from "./Items";
import Upcoming from "./Upcoming";

const Menu = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-x-4 text-sm font-semibold leading-6 text-white focus:outline-none">
        <span>Martín Garnica</span>
        <Avatar
          isBordered
          color="success"
          size="sm"
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
          <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <Items />
            <Upcoming />
            <Link
              href="/log-out"
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-red-600 bg-gray-100 hover:text-white hover:bg-red-400 transition-colors duration-300"
            >
              Cerrar sesión
            </Link>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Menu;
