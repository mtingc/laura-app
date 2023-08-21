const Logo = ({ white = false }: { white?: boolean }) => {
  return (
    <h1
      className={`${
        white ? "text-white" : "text-indigo-600"
      } " text-xl font-bold tracking-wider"`}
    >
      Teacher Laura
    </h1>
  );
};

export default Logo;
