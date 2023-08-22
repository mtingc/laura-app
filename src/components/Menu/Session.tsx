import { useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";

const Session = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex items-end flex-col text-gray-500">
        <p className="text-sm font-medium">{session && session.user?.name}</p>
        <p className="text-xs font-light">
          {session && session.user?.type === "STUDENT" ? "Student" : "Teacher"}
        </p>
      </div>
      <Avatar
        isBordered
        color="success"
        size="sm"
        src={(session && session.user?.image) || ""}
      />
    </>
  );
};

export default Session;
