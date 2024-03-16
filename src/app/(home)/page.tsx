"use client";
import Tab from "@/components/home/Tab";
import { useMainContext } from "@/contexts/MainProvider";
import { Calendar, Menu, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import main1 from "/public/icon/main1.png";
import Link from "next/link";

interface ITab {
  title: string;
  list:
    | Array<{
        name: string;
        description: string;
      }>
    | [];
}

const tab: ITab[] = [
  {
    title: "여행 일기",
    list: [],
  },
  {
    title: "빠른 메모",
    list: [],
  },
];

export default function Home() {
  const { selectedIndex, setSelectedIndex } = useMainContext();

  useEffect(() => {
    require("next-pwa/register");
  }, []);

  return (
    <div className="w-full h-full overflow-clip">
      <div className="w-full flex gap-5 mb-6 p-6">
        {tab.map((element, index) => (
          <Tab
            key={element.title}
            title={element.title}
            selected={selectedIndex === index}
          />
        ))}
        <div className="flex gap-5 ml-auto">
          <Calendar />
          <Menu />
        </div>
      </div>
      <div className="flex flex-col p-6 gap-2 text-center items-center justify-center w-full h-full bg-white rounded-t-3xl">
        {tab[selectedIndex].list.length === 0 ? (
          <>
            <div className="mt-auto w-1/2 h-fit">
              <Image src={main1} alt="travel" />
            </div>
            <p className="font-GowunBatangRegular text-2xl">
              여행 일기 시작하기
            </p>
            <p className="font-PretendardRegular text-[#313131cc]">
              나만의 여행 일기를 작성해보세요
              <br />
              시작하려면 더하기 버튼을 탭하세요
            </p>
          </>
        ) : (
          <div className="flex flex-col w-4/5 gap-4">
            {tab[selectedIndex].list.map((element) => (
              <div
                key={element?.name}
                className="flex flex-col items-center justify-center w-full h-24 bg-white rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <p>{element?.name}</p>
                  <p>{element?.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link
          className="flex items-center justify-center rounded-full w-10 h-10 bg-green_first my-auto"
          href={"/new"}
        >
          <button>
            <Plus size={16} />
          </button>
        </Link>
      </div>
    </div>
  );
}
