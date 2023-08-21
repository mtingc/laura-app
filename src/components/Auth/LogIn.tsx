import Link from "next/link";

import { Formik } from "formik";
import { signIn } from "next-auth/react";
import { Button, Input } from "@nextui-org/react";
import { useNotification } from "@/context";

const LogIn = () => {
  const { setNotification } = useNotification();

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.ok === false) {
      setNotification({
        isOpen: true,
        title: "Inicio de sesión fallido",
        message: "Credenciales inválidas. Inténtalo de nuevo.",
        icon: "error",
        onClose: () => setNotification(null),
      });
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow-md sm:rounded-lg sm:px-12">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Input
                id="email"
                name="email"
                type="email"
                label="Correo"
                size="sm"
                variant="bordered"
                value={values.email}
                onChange={handleChange}
              />
              <Input
                id="password"
                name="password"
                type="password"
                label="Contraseña"
                size="sm"
                variant="bordered"
                value={values.password}
                onChange={handleChange}
              />

              <Button type="submit" color="primary">
                Iniciar sesión
              </Button>
            </form>
          )}
        </Formik>
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
  );
};

export default LogIn;
