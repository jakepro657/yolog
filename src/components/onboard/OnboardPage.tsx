"use client";

import React, { useContext } from "react";
import { ChevronLeft, ChevronLeftIcon } from "lucide-react";
import onboard1 from "/public/icon/onboard1.png";
import onboard2 from "/public/icon/onboard2.png";
import onboard3 from "/public/icon/onboard3.png";
import onboard4 from "/public/icon/onboard4.png";
import onboard5 from "/public/icon/onboard5.png";
import progress1 from "/public/icon/progress1.png";
import progress2 from "/public/icon/progress2.png";
import progress3 from "/public/icon/progress3.png";
import progress4 from "/public/icon/progress4.png";
import kakao from "/public/icon/kakao.png";
import naver from "/public/icon/naver.png";
import google from "/public/icon/google.png";
import apple from "/public/icon/apple.png";
import { OnboardContext } from "../../contexts/OnboardProgressProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

function OnboardPage({}: Props) {
  const { handleNext, handlePrev, index, setIndex } =
    useContext(OnboardContext);

  const router = useRouter();

  return (
    <>
      <div className="w-full h-full overflow-clip">
        <div className="w-full flex gap-5 p-6">
          <ChevronLeft onClick={handlePrev} />
        </div>
      </div>
      <div className="flex flex-col text-center items-center absolute pt-16 left-1/2 -translate-x-1/2 top-0 w-full h-full sm:w-[500px] bg-white">
        {index === 0 && (
          <>
            <div className="my-auto font-GowunBatangRegular text-3xl">
              <span className="text-green_first">여행</span>의 모든 순간, <br />
              나만의 이야기로 물들이다
            </div>
            <div className="text-[#313131cc] font-PretendardRegular text-xs">
              {"["}다음{"]"} 버튼을 누르면{" "}
              <span className="border-b border-[#313131cc]">이용약관</span> 및
              <br />{" "}
              <span className="border-b border-[#313131cc]">
                개인정보 수집 및 이용
              </span>
              에 동의하게 됩니다.
            </div>
            <button
              onClick={handleNext}
              className="font-PretendardRegular my-6 w-4/5 h-12 rounded-xl bg-green_first"
            >
              다음
            </button>
            <div className="text-[#313131cc] mb-6 font-PretendardRegular text-xs">
              기존 계정으로{" "}
              <span className="border-b border-[#313131cc]">로그인</span>
            </div>
          </>
        )}
        {index === 1 && (
          <>
            <div className="h-1/3 mt-auto">
              <Image className="h-full w-fit" src={onboard1} alt="travel" />
            </div>
            <div className="mb-auto leading-relaxed font-GowunBatangRegular text-2xl">
              <span className="text-green_first">여행</span>의 모든 순간을{" "}
              <br />
              생생하게 <span className="text-green_first">기록</span>해요
            </div>
            <div className="w-1/5">
              <Image src={progress1} alt="travel" />
            </div>
            <button
              onClick={handleNext}
              className="font-PretendardRegular my-6 w-4/5 h-12 rounded-xl bg-green_first"
            >
              다음
            </button>
          </>
        )}
        {index === 2 && (
          <>
            <div className="h-1/3 mt-auto">
              <Image className="h-full w-fit" src={onboard2} alt="travel" />
            </div>
            <div className="mb-auto leading-relaxed font-GowunBatangRegular text-2xl">
              <span className="text-green_first">여행</span>의 추억, <br />
              시간순으로 정리해요
            </div>
            <div className="w-1/5">
              <Image src={progress2} alt="travel" />
            </div>
            <button
              onClick={handleNext}
              className="font-PretendardRegular my-6 w-4/5 h-12 rounded-xl bg-green_first"
            >
              다음
            </button>
          </>
        )}
        {index === 3 && (
          <>
            <div className="h-1/3 mt-auto">
              <Image className="h-full w-fit" src={onboard3} alt="travel" />
            </div>
            <div className="mb-auto leading-relaxed font-GowunBatangRegular text-2xl">
              마음에 드는 주제를 골라
              <br />
              쉽고 재밌게 <span className="text-green_first">기록</span>해요
            </div>
            <div className="w-1/5">
              <Image src={progress3} alt="travel" />
            </div>
            <button
              onClick={handleNext}
              className="font-PretendardRegular my-6 w-4/5 h-12 rounded-xl bg-green_first"
            >
              다음
            </button>
          </>
        )}
        {index === 4 && (
          <>
            <div className="h-1/3 mt-auto">
              <Image className="h-full w-fit" src={onboard4} alt="travel" />
            </div>
            <div className="mb-auto leading-relaxed font-GowunBatangRegular text-2xl">
              <span className="text-green_first">여행</span>의 감동을
              <br />
              세상에 공유해요
            </div>
            <div className="w-1/5">
              <Image src={progress4} alt="travel" />
            </div>
            <button
              onClick={handleNext}
              className="font-PretendardRegular my-6 w-4/5 h-12 rounded-xl bg-green_first"
            >
              다음
            </button>
          </>
        )}
        {index === 5 && (
          <>
            <div className="mt-auto font-GowunBatangRegular text-2xl">
              여행의 모든 감동을
              <br />
              나만의 이야기로 기록해보세요!
            </div>
            <div className="text-[#313131cc] my-4 font-PretendardRegular text-sm">
              3초면 회원가입이 가능해요
            </div>
            <div className="flex flex-col w-full items-center gap-4 font-PretendardRegular">
              <button
                onClick={() => setIndex(index + 1)}
                className="flex items-center gap-4 w-4/5 h-12 rounded-xl bg-[#FFEB3B]"
              >
                <Image className="ml-6 w-6 h-6 mr-8" src={kakao} alt="kakao" />
                <div className="mr-auto">카카오톡으로 계속하기</div>
              </button>
              <button className="flex items-center gap-4 w-4/5 h-12 rounded-xl bg-[#00BF18]">
                <Image className="ml-6 w-6 h-6 mr-8" src={naver} alt="naver" />
                <div className="mr-auto">네이버로 계속하기</div>
              </button>
              <button className="flex items-center gap-4 w-4/5 h-12 rounded-xl bg-[#F5F5F5]">
                <Image
                  className="ml-6 w-6 h-6 mr-8"
                  src={google}
                  alt="google"
                />
                <div className="mr-auto">Google로 계속하기</div>
              </button>
              <button className="flex items-center gap-4 w-4/5 h-12 rounded-xl bg-[#DEDEDE]">
                <Image className="ml-6 w-6 h-6 mr-8" src={apple} alt="apple" />
                <div className="mr-auto">Apple로 계속하기</div>
              </button>
            </div>
            <div className="text-[#313131cc] border-t border-[#313131cc] px-8 py-3 my-4 font-PretendardRegular text-xs">
              이미 계정이 있으신가요? <span className="border-b-2">로그인</span>
            </div>
          </>
        )}
        {index === 6 && (
          <>
            <div className="my-auto leading-relaxed font-GowunBatangRegular text-2xl">
              여행의 순간을 빠짐없이
              <br />
              기억할 수 있도록 도와드릴게요
            </div>
            <div className="h-1/3 mb-auto">
              <Image className="h-full w-fit" src={onboard5} alt="travel" />
            </div>
            <div className="text-[#313131cc] my-4 font-PretendardRegular text-xs">
              언제든지 {"[MY > 설정 > 알림]"}에서 변경할 수 있어요.
            </div>
            <button
              onClick={() => router.replace("/")}
              className="font-PretendardRegular my-2 w-4/5 h-12 rounded-xl bg-green_first"
            >
              알림받고 여행 간직하기
            </button>
            <button
              onClick={handleNext}
              className="font-PretendardRegular mb-6 w-4/5 h-12 text-[#313131cc] rounded-xl bg-gray-300"
            >
              저는 괜찮아요
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default OnboardPage;
