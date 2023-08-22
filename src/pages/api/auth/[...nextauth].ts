import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { signIn, getMe } from "@/services";
import { NEXTAUTH_SECRET } from "@/config";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (credentials == null) return null;
        try {
          const { user, jwt } = await signIn({
            email: credentials.email,
            password: credentials.password,
          });
          return { ...user, jwt };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async (params: any) => {
      const { session, token } = params;
      if (token) {
        try {
          const user = await getMe(token.jwt);
          session.user = {
            id: user.id,
            name: `${user.name} ${user.lastname}`,
            username: user.username,
            email: user.email,
            image: user.avatar?.url,
            rol: user.rol,
            type: user.type,
            jwt: token.jwt,
          };
        } catch (error) {
          throw new Error(`Error obteniendo los datos del usuario: ${error}`);
        }
      }

      return Promise.resolve(session);
    },
    jwt: async (params: any) => {
      const { token, user } = params;
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.id = user.id;
        token.jwt = user.jwt;
      }
      return Promise.resolve(token);
    },
  },
  secret: NEXTAUTH_SECRET,
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
