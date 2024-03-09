"use client"
import { createContext, useState } from "react";

const defaultValue = {
  index: 0,
  setIndex: (index: number) => {},
  handleNext: () => {},
  handlePrev: () => {},
};

export const OnboardContext = createContext({
  ...defaultValue,
});

export const OnboardProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIndex((prev) => prev - 1);
  };

  return (
    <OnboardContext.Provider
      value={{ index, setIndex, handleNext, handlePrev }}
    >
      {children}
    </OnboardContext.Provider>
  );
};
