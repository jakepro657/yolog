import { useMainContext } from "@/contexts/MainProvider";
import React from "react";

type Props = {
  title: string;
  selected: boolean;
};

function Tab({ title, selected }: Props) {

  const { setSelectedIndex } = useMainContext();

  return (
    <button
      className={
        selected
          ? "text-lg font-GowunBatangRegular border-green_first text-[#414C39] border-b-4"
          : "text-lg font-GowunBatangRegular text-green_second"
      }
      onClick={() => setSelectedIndex(title === "여행 일기" ? 0 : 1)}
    >
      {title}
    </button>
  );
}

export default Tab;
