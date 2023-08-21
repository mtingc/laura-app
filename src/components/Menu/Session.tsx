import { useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";

const Session = () => {
  const { data: session } = useSession();
  return (
    <>
      <span>{session && session.user?.name}</span>
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
