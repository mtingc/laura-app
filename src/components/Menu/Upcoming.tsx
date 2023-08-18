import Link from "next/link";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const upcomingMeetings = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    date: "2023-08-18T12:30:00Z",
  },
  {
    id: 2,
    title:
      "How to use search engine optimization to drive traffic to your site",
    href: "#",
    date: "2023-08-24T17:15:00Z",
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    date: "2023-09-16T08:00:00Z",
  },
];

const Upcoming = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="flex justify-between">
        <h3 className="text-sm font-semibold leading-6 text-gray-500">
          Next meetings
        </h3>
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-indigo-600"
        >
          View all <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      {true ? (
        <ul role="list" className="mt-6 space-y-2">
          {upcomingMeetings.map(({ id, title, date, href }) => (
            <li
              key={id}
              className="relative p-2 rounded hover:bg-gray-100 transition-colors duration-300"
            >
              <Link href={href}>
                <time
                  dateTime={date}
                  className="block text-xs leading-6 text-gray-600"
                >
                  {format(new Date(date), "eeee MMMM do, yyyy 'at' h:mm a", {
                    locale: enUS,
                  })}
                </time>
                <h6 className="block truncate text-sm font-semibold leading-6 text-gray-900">
                  {title}
                  <span className="absolute inset-0" />
                </h6>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-gray-500">There are not pending meetings.</p>
      )}
    </div>
  );
};

export default Upcoming;
