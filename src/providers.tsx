"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { NextUIProvider } from "@nextui-org/react";

import { Notification } from "@/components/UI";
import { NotificationProvider } from "@/context";

export function Providers({
  session,
  children,
}: {
  session: Session | null;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <NotificationProvider>
          <Notification /> {children}
        </NotificationProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
