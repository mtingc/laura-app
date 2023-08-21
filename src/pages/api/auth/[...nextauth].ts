import { NextApiRequest, NextApiResponse } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn, getUserData } from "@/services";
import { IUser } from "@/interfaces";

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
    session: async ({ session, token }: { session: any; token: any }) => {
      try {
        const response = await getUserData(token.jwt);

        const apiData = response.data;
        session.apiData = apiData;

        return Promise.resolve(session);
      } catch (error) {
        return Promise.resolve(session);
      }
    },
    jwt: async (params) => {
      const { token, user } = params;
      const isSignIn = user ? true : false;
      if (isSignIn && "jwt" in user) {
        token.id = user.id;
        token.jwt = user.jwt;
      }
      console.log(token, user);
      return Promise.resolve(token);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default Auth;
