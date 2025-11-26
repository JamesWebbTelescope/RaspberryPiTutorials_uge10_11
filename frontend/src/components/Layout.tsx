
import type { ReactNode } from "react";
import Header from "./Header";
import BackgroundImage from "./Image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <h1 style={{ color: "black", textAlign: "center", paddingTop: "0vh" }}>
        <Header />
      </h1>
      <main>
          {children}
          <BackgroundImage/>
        </main>
    </div>
  );
}
