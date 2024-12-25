import { type ReactNode } from "react";
import MainLayout from "../_components/main-layout";

function layout({ children }: { children: ReactNode }) {
  <body>
    <nav>Navbar</nav>
    <aside>aside</aside>
    <main>main</main>
    <footer>footer</footer>
  </body>;

  return <MainLayout>{children}</MainLayout>;
}

export default layout;
