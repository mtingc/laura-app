import Link from "next/link";
import { Button, Input } from "@nextui-org/react";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Inicia sesión
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <form className="space-y-6" action="#" method="POST">
            <Input
              type="email"
              label="Correo"
              isRequired
              size="sm"
              variant="bordered"
            />
            <Input
              type="password"
              label="Contraseña"
              isRequired
              size="sm"
              variant="bordered"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm leading-6">
                <Link
                  href="forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </div>

            <Button color="primary">Iniciar sesión</Button>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿Tienes algún problema para iniciar?{" "}
          <Link
            href="/contact"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Contactate conmigo.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
