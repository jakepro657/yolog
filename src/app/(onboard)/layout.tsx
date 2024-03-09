import { OnboardProvider } from "@/components/onboard/OnboardProgressProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return <OnboardProvider>{children}</OnboardProvider>;
}

export default layout;
