import { type ReactNode } from "react";
import { UserDataProvider } from "@/providers/user-data-provider";

import { auth } from "@/server/auth";

async function ProtectedRoute({ children }: { children: ReactNode }) {
  const session = await auth();

  //TODO:Better Error handling this must not happen at all.

  return <UserDataProvider session={session}>{children}</UserDataProvider>;
}

export default ProtectedRoute;
