import Link from "next/link";

interface IItemMenu {
  name: string;
  description: string;
  href: string;
  icon: any;
}

import {
  CalendarDaysIcon,
  ChartBarIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Agenda",
    description: "Schedule and review your meetings",
    href: "/agenda",
    icon: CalendarDaysIcon,
  },
  {
    name: "Process",
    description: "Review your learning process",
    href: "/process",
    icon: ChartBarIcon,
  },
  {
    name: "Profile",
    description: "Review your profile and your personal data",
    href: "/profile",
    icon: UserIcon,
  },
];

const Items = () => {
  return (
    <div className="p-4">
      {solutions.map(({ name, description, icon: Icon, href }) => (
        <Link
          key={name}
          href={href}
          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 transition-all duration-300"
        >
          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <Icon
              className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="font-semibold text-slate-900 group-hover:text-indigo-600">
              {name}
              <span className="absolute inset-0" />
            </p>
            <p className="text-gray-600">{description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Items;
