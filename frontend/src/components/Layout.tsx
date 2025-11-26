
import type { ReactNode } from "react";
import Header from "./Header";
import RaspberryPiImage from "./Image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-black text-white">
      <h1 >
        <Header />
        <main>
          {children}
        </main>
      </h1>
      <RaspberryPiImage />
    </div>
  );
}
