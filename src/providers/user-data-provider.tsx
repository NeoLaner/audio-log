"use client";
// context/UserDataContext.tsx
import React, { createContext, type ReactNode } from "react";

import { type auth } from "@/server/auth";

// type UserSession = NonNullable<Awaited<ReturnType<typeof auth>>>;
type UserSession = {
  expires: string;
  user: {
    email?: string | null;
    id: string;
    image?: string | null;
    name?: string | null;
  };
};

interface UserDataContextType {
  //TODO: Dynamic session type
  userData: UserSession["user"] | null | undefined; // Define your userData type here
}

export const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined,
);

export const UserDataProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: UserSession | null | undefined;
}) => {
  return (
    <UserDataContext.Provider value={{ userData: session?.user }}>
      {children}
    </UserDataContext.Provider>
  );
};
