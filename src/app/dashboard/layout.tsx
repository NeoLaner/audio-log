import { type ReactNode } from "react";
import MainLayout from "../_components/main-layout";

function layout({ children }: { children: ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}

export default layout;
