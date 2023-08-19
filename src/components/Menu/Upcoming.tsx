import Link from "next/link";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const upcomingMeetings = [
  {
    id: 1,
    topicToCover: "Boost your conversion rate",
    teacher: "Laura Arriaga",
    href: "#",
    date: "2023-08-18T12:30:00Z",
  },
  {
    id: 2,
    topicToCover:
      "How to use search engine optimization to drive traffic to your site",
    teacher: "Laura Arriaga",
    href: "#",
    date: "2023-08-24T17:15:00Z",
  },
  {
    id: 3,
    topicToCover: "Improve your customer experience",
    teacher: "Laura Arriaga",
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
          {upcomingMeetings.map(({ id, topicToCover, teacher, date, href }) => (
            <li
              key={id}
              className="relative p-2 rounded hover:bg-gray-100 transition-colors duration-300"
            >
              <Link href={href}>
                <span className="flex text-xs leading-6 text-gray-400">
                  Teacher {teacher}
                  <time dateTime={date} className="text-gray-600 ml-2">
                    {format(new Date(date), "eeee MMMM do, yyyy 'at' h:mm a", {
                      locale: enUS,
                    })}
                  </time>
                </span>

                <h6 className="block truncate text-sm font-semibold leading-6 text-gray-900">
                  {topicToCover}
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
