import { MainProvider } from "@/contexts/MainProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function HomeLayout({ children }: Props) {
  return (
    <MainProvider>
      <div className="w-full h-full bg-[#EAF6E1]">{children}</div>
    </MainProvider>
  );
}

export default HomeLayout;
