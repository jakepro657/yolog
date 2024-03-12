"use client";

import React, { useContext } from "react";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon } from "lucide-react";
import onboard1 from "/public/icon/onboard1.png";
import onboard2 from "/public/icon/onboard2.png";
import onboard3 from "/public/icon/onboard3.png";
import onboard4 from "/public/icon/onboard4.png";
import onboard5 from "/public/icon/onboard5.png";
import progress1 from "/public/icon/progress1.png";
import progress2 from "/public/icon/progress2.png";
import progress3 from "/public/icon/progress3.png";
import progress4 from "/public/icon/progress4.png";
import { OnboardContext } from "./OnboardProgressProvider";
import Screen from "./Screen";

type Props = {};

const screens = [
  {
    img: null,
    title: "여행의 모든 순간,\n나만의 이야기로 물들이다",
    button: "다음",
    progress: null,
  },
  {
    img: onboard1,
    title: "여행의 모든 순간을\n생생하게 기록해요",
    button: "다음",
    progress: progress1,
  },
  {
    img: onboard2,
    title: "여행의 추억,\n시간순으로 정리해요",
    button: "다음",
    progress: progress2,
  },
  {
    img: onboard3,
    title: "마음에 드는 주제를 골라\n쉽고 재밌게 기록해요",
    button: "다음",
    progress: progress3,
  },
  {
    img: onboard4,
    title: "여행의 감동을\n세상에 공유해요",
    button: "다음",
    progress: progress4,
  },
  {
    img: onboard5,
    title: "여행의 순간을 빠짐없이\n기억할 수 있도록 도와드릴게요",
    button: "다음",
    progress: progress4,
  },
];

function OnboardPage({}: Props) {
  const { handleNext, handlePrev, index, setIndex } =
    useContext(OnboardContext);

    
  return (
    <>
      <div className="z-10 p-4 absolute h-16 w-full sm:w-[500px] left-1/2 -translate-x-1/2 top-0 bg-white">
        <ChevronLeftIcon
          className="cursor-pointer"
          size={32}
          onClick={handlePrev}
        />
      </div>
      <div className="flex flex-col items-center absolute pt-16 left-1/2 -translate-x-1/2 top-0 w-full h-full sm:w-[500px] bg-white">
        {screens.map((screen, i) => {
          if (index === 0 && index === i) {
            return (
              <Screen key={i}>
                <Screen.Title title={screen.title} />
                <Screen.Description description="[다음] 버튼을 누르면 이용약관 및\n개인정보 수집 및 이용에 동의하게 됩니다." />
                <Screen.Button label={screen.button} onClick={handleNext} />
                <Screen.Description description="기존 계정으로 로그인" />
              </Screen>
            );
          }
          if (index === screens.length - 1 && index === i) {
            return (
              <Screen key={i}>
                <Screen.Title title={screen.title} />
                <Screen.LargeIcon img={screen.img!} />
                <Screen.Description description="언제든지 [MY > 설정 > 알림]에서 변경할 수 있어요." />
                <Screen.Button
                  label={"알림받고 여행 간직하기"}
                  onClick={handleNext}
                />
                <Screen.Button label={"저는 괜찮아요!"} onClick={handleNext} />
              </Screen>
            );
          }
          if (index === screens.length - 2 && index === i) {
            return (
              <Screen key={i}>
                <Screen.Title title={screen.title} />
                <Screen.Description description="3초면 회원가입이 가능해요" />
                <Screen.Button
                  label={"카카오톡으로 계속하기"}
                  onClick={handleNext}
                />
                <Screen.Button
                  label={"Naver로 계속하기"}
                  onClick={handleNext}
                />
                <Screen.Button
                  label={"Google로 계속하기"}
                  onClick={handleNext}
                />
                <Screen.Button
                  label={"Apple로 계속하기"}
                  onClick={handleNext}
                />
                <Screen.Description description="이미 계정이 있으신가요? 로그인" />
                <Screen.Button
                  label={"이미 계정이 있으신가요? 로그인"}
                  onClick={handleNext}
                />
              </Screen>
            );
          }
          if (index === i) {
            return (
              <Screen key={i}>
                <Screen.LargeIcon img={screen.img!} />
                <Screen.Title title={screen.title} />
                <Screen.Progress />
                <Screen.Button label={"다음"} onClick={handleNext} />
              </Screen>
            );
          }
        })}
      </div>
    </>
  );
}

export default OnboardPage;
