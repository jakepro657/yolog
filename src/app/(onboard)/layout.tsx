import { OnboardProvider } from "@/contexts/OnboardProgressProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <OnboardProvider>
      <div className="w-full h-full bg-white">{children}</div>
    </OnboardProvider>
  );
}

export default layout;
