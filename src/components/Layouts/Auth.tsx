import { LogIn, Logo } from "@/components";

const AuthLayout = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Logo />
        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
          Inicia sesión
        </h2>
      </div>

      <LogIn />
    </div>
  );
};

export default AuthLayout;
