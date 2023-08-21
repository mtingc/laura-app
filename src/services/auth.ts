import axios from "axios";

const strapiUrl = process.env.STRAPI_URL;

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const res = await axios.post(`${strapiUrl}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}

export async function getUserData(jwt: string) {
  console.log(jwt);
  const headers = {
    Authorization: `Bearer ${jwt}`,
  };
  const res = await axios.get(`${strapiUrl}/api/users/me`, { headers });
  return res.data;
}
