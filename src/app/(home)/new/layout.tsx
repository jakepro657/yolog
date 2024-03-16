import { NewProvider } from "@/contexts/NewProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <NewProvider>
      <div className="w-full h-full bg-white">{children}</div>
    </NewProvider>
  );
}

export default layout;
