import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "@/providers";
import { MainLayout } from "@/components/Layouts";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Providers session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  );
}
