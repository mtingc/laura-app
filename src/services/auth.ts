import axios, { AxiosError } from "axios";

import { STRAPI_URL } from "@/config";

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await axios.post(`${STRAPI_URL}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function getMe(jwt: string) {
  try {
    const res = await axios.get(`${STRAPI_URL}/api/users/me`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      throw new Error(`Error de respuesta: ${axiosError.response.status}`);
    }

    throw new Error(`Error: ${axiosError.message}`);
  }
}
