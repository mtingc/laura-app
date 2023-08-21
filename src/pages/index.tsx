import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <h1 className="text-black mt-40">
      {session ? "Authenticated" : "Not Authenticated"}
    </h1>
  );
};

export default Home;
